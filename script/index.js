const http      = require('http');
const express   = require('express');
const fs        = require('fs');
const url       = require('url');
const path      = require('path');
const app       = express();
const port      = 3100;
let   errorPage = path.join(__dirname, '../appPages/not_found.html');


app.get('/', (req, res) => {
    // res.send("Wellcome to Node Js");
    fs.readFile('../appPages/index.html', (error, pageRes) => {
        if(error) {
            res.writeHead(404);
            res.write("Content you are looking for are not Found");
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(pageRes);
        }
        res.end();
    });
});

app.get('/aboutus', (req, res) => {
    fs.readFile('../appPages/aboutus.html', (error, pageRes) => {
        if(error) {
            res.writeHead(404);
            res.write("Content you looking for are not Found!")
            // error404();
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(pageRes);
        }
        res.end();
    });
});

app.use(function (req, res, next) {
    res.sendFile(errorPage);
})


app.listen(port, () => {
	console.log(`Server running on port: 127.0.0.1:${port}`);
});
