const myLbrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
    this.getInfo = function () {
        return this.title + ' ' + this.author + ' ' + this.pages + ' ' + this.read;
    };
    console.log(this.getInfo());
}

const MeBeforeYou = new Book('Me Before You', 'Jojo Moyes', 369, 'Yes I have read it');

MeBeforeYou.getInfo

function addNewBook() {
    const newTitle = input("What is the title?")
    const newAuthor = prompt("Who is the author?")
    const newPages = prompt("How many pages does the book have?")
    const newRead = prompt("Have you read the book?")

    const NewBook = new Book(newTitle, newAuthor, newPages, newRead)
    NewBook.getInfo
}

addNewBook();