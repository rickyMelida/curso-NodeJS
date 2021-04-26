const os = require('os');

console.log(os.release());
console.log('free memory ' + os.freemem());
console.log('Memoria total ' + os.totalmem());