const path = require('path');

console.log(path.basename(__filename));

// directory name only

console.log(path.dirname(__filename));

// get the extension
console.log(path.extname(__filename));

// create an object
console.log(path.parse(__filename));

// join ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));