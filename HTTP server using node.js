Program:

const http = require ("http");

const server = http. create Server ((req, res) {

res. write ("This is the response from the server")s

res.end();
});

Server-listen (3000, () => {

Console. log ("server is running on port 3000"); 
});
