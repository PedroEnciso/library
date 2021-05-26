// get document elements
const bookList = document.getElementById("book-list");
const addBookModal = document.getElementById("add-book-modal");
const addBookButton = document.getElementById("add-book");
const modalX = document.getElementById("modal-x");

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

const theHobbit2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit2);

const addBook = () => {
  addBookModal.style.visibility = "visible";
};

const displayLibrary = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
};

const displayBook = (book) => {
  /* model for book card
    <card>
        <div>
            <bookTitle>
            <bookAuthor>
        </div>
        <div>
            <read>
            <pages>
        </div>
    </card>
*/

  // creating html elements
  const card = document.createElement("div");

  const x = document.createElement("img");
  x.src = "img/x2.svg";

  const container1 = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("p");

  const container2 = document.createElement("div");
  const read = document.createElement("p");
  const pages = document.createElement("p");

  // add classes to elements
  card.classList.add("card");
  container1.classList.add("container1");
  bookTitle.classList.add("book-title");
  bookAuthor.classList.add("book-author");
  container2.classList.add("container2");
  read.classList.add("read");
  pages.classList.add("pages");

  // adding inner html
  bookTitle.innerHTML = book.title;
  bookAuthor.innerHTML = book.author;
  pages.innerHTML = book.pages;

  if (book.read === true) read.innerHTML = "already read";
  else read.innerHTML = "not read";

  // adding elements to their parent node
  container1.appendChild(bookTitle);
  container1.appendChild(bookAuthor);
  container2.appendChild(read);
  container2.appendChild(pages);

  card.appendChild(x);
  card.appendChild(container1);
  card.appendChild(container2);

  // dispaly the card
  bookList.appendChild(card);
};

const exitModal = () => {
  addBookModal.style.visibility = "hidden";
};

displayLibrary();

// eventlisteners
addBookButton.addEventListener("click", () => addBook());
modalX.addEventListener("click", () => exitModal());
