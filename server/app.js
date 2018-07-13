var express = require('express');
var app = express();
const index = require('./routes/index');
app.use('/', index);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

