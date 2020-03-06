'use strict';

const express = require('express');
const path = require('path');

// константы
const port = 80;
const host = '0.0.0.0';

// приложение
const app = express();
app.use(express.static(__dirname));


app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(port, host);
console.log(`running on http://${host}:${port}`);