const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const books = require('./routes');

app.listen(3000, function() {
  console.log("Server listening");
});
app.use(volleyball);

// app.use('/special/', (req, res, next) => {
//   console.log("I'm the Special!");
//   next();
// });

// app.get('/', (req, res, next) => {
//   res.send("Hello, you are on our server");
// });

// app.post('/modernism', (req, res, next) => {
//   console.log(req.method + ' line21 ' + req.path);
//   res.send("Success");
// });
// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.path);
//   next();
// });


// Starting nunjucks part
function Book(author, title){
	this.author = author;
	this.title = title;
}

var mockingbird = new Book("Lee", "Mockingbird");
var harryPotter = new Book("Rowling", "Harry Potter");
var hobbit = new Book("Tolkien", "The Hobbit");

var context = {
	title: "List of Books",
	books: [mockingbird, harryPotter, hobbit]
}

nunjucks.configure('views', {
	noCache: true,
	express: app
});

app.set('view engine', 'html');

app.engine('html', nunjucks.render);


// var response = nunjucks.render('index.html', context);

app.get('/', (req, res, next) => {
	res.render('index', context);
});

// app.get('/', (req, res, next) => {
// 	nunjucks.render('index.html', context, function(err, response){
// 		res.send(response);
// 	});
// });











