function Book(author, title){
	this.author = author;
	this.title = title;
}

var mockingbird = new Book("Lee", "Mockingbird");
var harryPotter = new Book("Rowling", "Harry Potter");
var hobbit = new Book("Tolkien", "The Hobbit");

module.exports = {
	mockingbird: mockingbird,
	harryPotter: harryPotter,
	hobbit: hobbit
};