const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test1'), {}, err => {
//     if(err) throw err;
//     console.log('folder created');
// })

//Create and write file
// fs.writeFile(path.join(__dirname, '/test1', 'hello.txt'), 'Hello World', err => {
//     if(err) throw err;
//     console.log('File written to...');

//     //File append
//     fs.appendFile(path.join(__dirname, '/test1', 'hello.txt'), ' I love Node.js', err => {
//         if(err) throw err;
//         console.log('File written to...');
//     });
// });

//Read file
// fs.readFile(path.join(__dirname, '/test1', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

//Rename file
fs.rename(path.join(__dirname, '/test1', 'hello.txt'), path.join(__dirname, '/test1', 'helloworld.txt') , (err) => {
    if(err) throw err;
    console.log('File renamed...');
});