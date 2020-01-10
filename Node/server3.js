const express = require('express');

const app = express();

// middleware - send html file
app.use(express.static(__dirname + '/public'));

app.listen(3002);
