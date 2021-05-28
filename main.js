// get document elements
const bookList = document.getElementById("book-list");
const addBookModal = document.getElementById("add-book-modal");
const addBookButton = document.getElementById("add-book");
const modalX = document.getElementById("modal-x");
const titleInputBox = document.getElementById("title");
const authorInputBox = document.getElementById("author");
const pagesInputBox = document.getElementById("pages");
const radioYes = document.getElementById("yes");
const radioNo = document.getElementById("no");
const submitButton = document.getElementById("submit");
const incompleteMessage = document.getElementById("incomplete-message");

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

const addBook = () => {
  addBookModal.style.visibility = "visible";
};

const displayLibrary = () => {
  bookList.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
  createAddBookBox();
};

const displayBook = (book) => {
  // creating html elements
  const card = document.createElement("div");

  const x = document.createElement("img");
  x.src = "img/x2.svg";
  x.addEventListener("click", deleteBook);

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

  if (book.read === true) read.innerHTML = "Finished";
  else read.innerHTML = "Not Read";

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

const createAddBookBox = () => {
  const div = document.createElement("div");
  const plus = document.createElement("p");

  div.classList.add("card");
  div.classList.add("add-book-box");
  div.ariaLabel = "Add a new book";
  plus.classList.add("plus");
  plus.innerHTML = "+";

  div.appendChild(plus);
  bookList.appendChild(div);

  div.addEventListener("click", addBook);
};

const getFormData = (e) => {
  e.preventDefault();

  // check if form has been completed
  if (
    checkForm(titleInputBox.value, authorInputBox.value, pagesInputBox.value)
  ) {
    let bookRead = false;
    // check if book has been read
    if (radioYes.checked === true && radioNo.checked === false) {
      bookRead = true;
    }

    createBook(
      titleInputBox.value,
      authorInputBox.value,
      pagesInputBox.value,
      bookRead
    );
    exitModal();
  }
};

const createBook = (title, author, pages, read) => {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
};

const deleteBook = (e) => {
  const bookTitle = e.path[1].childNodes[1].childNodes[0].innerHTML;
  const parentDiv = e.path[1];
  parentDiv.remove();
  let bookIndex = findBookIndex(bookTitle);
  myLibrary.splice(bookIndex, 1);
};

const findBookIndex = (bookTitle) => {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title === bookTitle) {
      return i;
    }
  }
};

const checkForm = (title, author, pages) => {
  if (title === "" || author === "" || pages === "") {
    incompleteMessage.style.display = "block";
    return false;
  }
  return true;
};

const exitModal = () => {
  addBookModal.style.visibility = "hidden";
  clearModal();
};

const clearModal = () => {
  titleInputBox.value = "";
  authorInputBox.value = "";
  pagesInputBox.value = "";
  incompleteMessage.style.display = "none";
  radioNo.checked = "true";
};

displayLibrary();

// eventlisteners
addBookButton.addEventListener("click", addBook);
modalX.addEventListener("click", exitModal);
submit.addEventListener("click", getFormData);
