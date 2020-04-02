const express = require('express');

const rr = require()

const server = express();

server.use('/two', (req, res, next) => {
    console.log("First middleware;");
    next();
});

server.use((req, res, next) => {
    console.log("Second middleware;");
    res.send('<h1>Secondo middleware</h1>');
});

server.use('/users', (req, res, next) => {
    console.log("User Path");
    res.send('<h1>Mario rossi</h1></br><h1>Giovanni Verdi</h1></br>');
});

server.use('/', (req, res, next) => {
    console.log("Benvenuto;");
    res.send('<h1>Benvenuto</h1>');
});



server.listen(3000);