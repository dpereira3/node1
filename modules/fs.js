const fs = require('fs');
const path = require('path');


//create folder

/* fs.mkdir(path.join(__dirname,'test'), {}, (err) => {
    if(err) throw err;
    console.log('created folder successfully');
}) */

// create file and write to it

/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', 
    (err) => {
        if(err) throw err;
        console.log('file written to it ...');
}) */

// append to file content

/* fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Learn Node', 
    (err) => {
        if(err) throw err;
        console.log('append ...');
}) */

//reading file content
/* 
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', 
    (err, data) => {
        if(err) throw err;
        console.log('reading ... ', data );
}) */

// rename file

fs.rename(path.join(__dirname, '/test', 'hello.txt'),
            path.join(__dirname, '/test', 'new.txt'), 
    (err) => {
        if(err) throw err;
        console.log('rename ... ');
})