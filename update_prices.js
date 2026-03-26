const fs = require('fs');

let main = fs.readFileSync('src/main.ts', 'utf8');

// Replace old One-Time price text and PayPal button ID
main = main.replace(/1,999/g, '2,999');
main = main.replace(/MSG32JB7RGP9C/g, '3MBPX74TQAJ5C');

// Replace old Managed setup price text and PayPal button ID
main = main.replace(/799/g, '1,499');
main = main.replace(/PEFTFS2QHP7H4/g, 'ARFT7KPLLQEHN');

// Keep width:100% styling which was in the original integration
fs.writeFileSync('src/main.ts', main);
console.log('Prices and PayPal buttons successfully updated in src/main.ts');
