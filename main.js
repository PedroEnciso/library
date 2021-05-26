// get document elements
const bookList = document.getElementById("book-list");

// main library to display
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit);

function addBookToLibrary() {}

const displayLibrary = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
};

const displayBook = (book) => {
  const card = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const read = document.createElement("p");
  const pages = document.createElement("p");

  bookTitle.innerHTML = book.title;
  bookAuthor.innerHTML = book.author;
  pages.innerHTML = `${book.pages} pages`;

  if (book.read === true) read.innerHTML = "already read";
  else read.innerHTML = "not read yet";

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(read);
  card.appendChild(pages);

  bookList.appendChild(card);
};

displayLibrary();
