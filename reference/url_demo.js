const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Get Host (root domain)
console.log(myUrl.host);

//Get Hostname (without port)
console.log(myUrl.hostname);

//Pathname (opened file)
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params objects
console.log(myUrl.searchParams);

//Add new param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(name + ": " + value);
});