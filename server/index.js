const express = require('express');
const app = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../dist'));

app.listen(process.env.PORT || 5000)

module.exports = app;