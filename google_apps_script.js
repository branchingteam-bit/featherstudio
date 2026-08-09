/**
 * Atlantic Bear Google Apps Script for Leads CRM
 * 
 * Column Mapping (Columns A - X):
 * Column A (1): Submitted at
 * Column B (2): What is your first name?
 * Column C (3): What is your phone number?
 * Column D (4): Email
 * Column E (5): What's your business called?
 * Column F (6): What's your monthly revenue roughly?
 * Column G (7): booking_funnel (Source)
 * Columns H-X (8-24): Sales Pipeline & Closing Tracker
 */

function getSheet(ss, names) {
  for (let i = 0; i < names.length; i++) {
    let s = ss.getSheetByName(names[i]);
    if (s) return s;
  }
  return null;
}

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = getSheet(ss, ["Blank - Leads", "Leads"]);
  
  if (!sheet) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: "Leads sheet tab not found" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  let data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch(err) {
    data = e.parameter || {};
  }

  const phoneFormatted = data.phone ? "'" + data.phone : "";
  const targetRow = sheet.getLastRow() + 1;
  
  // Create row data for Columns A through G
  const rowData = [[
    new Date(),                       // Column A: Submitted at
    data.name || '',                  // Column B: First Name
    phoneFormatted,                   // Column C: Phone Number
    data.email || '',                 // Column D: Email (Blank on initial form submission)
    data.business || '',              // Column E: Business Name
    data.revenue || '',               // Column F: Monthly Revenue
    data.source || 'strategy_call'    // Column G: Source Funnel
  ]];

  sheet.getRange(targetRow, 1, 1, rowData[0].length).setValues(rowData);
  deduplicateLeads();

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function deduplicateLeads(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const leadsSheet = getSheet(ss, ["Blank - Leads", "Leads"]);
  const dupSheet = getSheet(ss, ["Blank - Duplicates Removed", "Duplicates Removed"]);

  if (!leadsSheet || !dupSheet) return;

  const lastRow = leadsSheet.getLastRow();
  if (lastRow <= 1) return;

  // 1. Clear formula errors (#ERROR!) in Column C (Phone Number) and convert to clean text
  const phoneRange = leadsSheet.getRange(2, 3, lastRow - 1, 1);
  const formulas = phoneRange.getFormulas();
  const displayVals = phoneRange.getDisplayValues();
  let fixedValues = [];
  let phoneFixed = false;

  for (let i = 0; i < displayVals.length; i++) {
    let formulaStr = String(formulas[i][0] || '').trim();
    let displayStr = String(displayVals[i][0] || '').trim();

    // Check if cell is formula (=+) or displays #ERROR! or starts with +
    if (formulaStr.length > 0 || displayStr.includes('#ERROR!') || displayStr.startsWith('+')) {
      let raw = formulaStr || displayStr;
      // Strip leading =, +, spaces
      let clean = raw.replace(/^[=+\s]+/, '');
      if (clean.length > 0 && !clean.includes('#ERROR!')) {
        fixedValues.push(["'+" + clean]);
        phoneFixed = true;
      } else {
        fixedValues.push([displayVals[i][0]]);
      }
    } else {
      fixedValues.push([displayVals[i][0]]);
    }
  }

  if (phoneFixed) {
    phoneRange.clearContent(); // Clear formulas first to eliminate #ERROR! persistence
    phoneRange.setValues(fixedValues);
    SpreadsheetApp.flush(); // Force Google Sheets to save clean text immediately
  }

  // 2. Fetch full data across Columns A to X
  const dataRange = leadsSheet.getRange(1, 1, lastRow, 24);
  const data = dataRange.getValues();
  const updatedFormulas = leadsSheet.getRange(1, 3, lastRow, 1).getFormulas();

  // Helper to extract phone digits even if cell contained a formula
  function getPhoneDigits(rowIndex) {
    let rawVal = String(data[rowIndex][2] || '');
    let formVal = String(updatedFormulas[rowIndex][0] || '');
    let combined = formVal || rawVal;
    return combined.replace(/\D/g, '');
  }

  // Map of complete Calendly booking profiles (which have Email in Column D)
  let completeProfiles = {}; // key (name|phoneDigits) -> row index

  for (let i = 1; i < data.length; i++) {
    let name = String(data[i][1]).trim().toLowerCase();
    let phoneDigits = getPhoneDigits(i);
    let email = String(data[i][3]).trim();

    // Complete booking profile has Name, Phone Digits, and Email
    if (name && phoneDigits && email) {
      completeProfiles[name + "|" + phoneDigits] = i;
    }
  }

  let rowsToDelete = [];

  // Iterate backwards so row deletions don't shift earlier row indexes
  for (let i = data.length - 1; i >= 1; i--) {
    let name = String(data[i][1]).trim().toLowerCase();
    let phoneDigits = getPhoneDigits(i);
    let email = String(data[i][3]).trim();
    let key = name + "|" + phoneDigits;

    // If a complete Calendly booking exists for this lead, but THIS row is missing Email (initial form submit):
    if (key && completeProfiles.hasOwnProperty(key)) {
      let completeRowIndex = completeProfiles[key];

      // Don't merge a row with itself
      if (completeRowIndex !== i && email === "") {
        let completeSheetRow = completeRowIndex + 1; // 1-based sheet row index

        // Merge Submitted at (Column A) if missing on complete row
        let submittedAt = data[i][0];
        if (submittedAt && !data[completeRowIndex][0]) {
          leadsSheet.getRange(completeSheetRow, 1).setValue(submittedAt);
        }

        // Merge Business Name (Column E) & Revenue (Column F) if missing on complete row
        let business = data[i][4];
        if (business && !data[completeRowIndex][4]) {
          leadsSheet.getRange(completeSheetRow, 5).setValue(business);
        }

        let revenue = data[i][5];
        if (revenue && !data[completeRowIndex][5]) {
          leadsSheet.getRange(completeSheetRow, 6).setValue(revenue);
        }

        // Merge Columns H through X (Indexes 7 to 23: Sales Pipeline & Call Notes)
        for (let colIdx = 7; colIdx <= 23; colIdx++) {
          let formNoteVal = data[i][colIdx];
          let completeNoteVal = data[completeRowIndex][colIdx];
          
          // Copy notes/info from form row to complete row if complete row is empty
          if (formNoteVal !== '' && formNoteVal !== null && formNoteVal !== undefined && (completeNoteVal === '' || completeNoteVal === null)) {
            leadsSheet.getRange(completeSheetRow, colIdx + 1).setValue(formNoteVal);
          }
        }

        // Archive incomplete duplicate form row to "Duplicates Removed" tab
        dupSheet.appendRow(data[i]);
        rowsToDelete.push(i + 1);
      }
    }
  }

  // Delete merged initial form rows from bottom to top
  for (let k = 0; k < rowsToDelete.length; k++) {
    leadsSheet.deleteRow(rowsToDelete[k]);
  }
}
