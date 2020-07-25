const express = require('express');
const app = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../dist'));

app.get('/', function(req, res) {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

module.exports = app;