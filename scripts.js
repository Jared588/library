const myLibrary = [];

function Book(author, title, pages, status) {
  this.author = author
  this.title = title
  this.pages = pages
  this.status = status
  return;
}

function addBookToLibrary(author, title, pages, status) {
    const newBook = new Book(author, title, pages, status);
    myLibrary.push(newBook);
}

