const HTTP = require('http');

HTTP.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(5050, () => console.log('server running...'));