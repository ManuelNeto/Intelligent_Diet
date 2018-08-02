var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var app = express();
app.use(cors())

const index = require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
app.use('/', index);

mongoose.connect(`mongodb://localhost:27017/intelligentDiet`)
    .then(() => {
        console.log(`Succesfully Connected to the Mongodb Database  at URL: intelligentDiet`)
    })
    .catch((error) => {
        console.log(error);
        console.log(`Error Connecting to the Mongodb Database at URL: intelligentDiet`)
    });
