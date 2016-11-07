const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const volleyball = require('volleyball');

app.listen(3000, function() {
  console.log("Server listening");
});
app.use(volleyball);

app.use('/special/', (req, res, next) => {
  console.log("I'm the Special!");
  next();
});

app.get('/', (req, res, next) => {
  res.send("Hello, you are on our server");
});

app.post('/modernism', (req, res, next) => {
  console.log(req.method + ' line21 ' + req.path);
  res.send("Success");
});
// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.path);
//   next();
// });






