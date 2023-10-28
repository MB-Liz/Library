const bookForm = document.querySelector(".book-form");
const addBookButton = document.querySelector("#add-book-button");
const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookProgress = document.querySelector("#progress");
const newBookPages = document.querySelector("#pages");
const newBookStatus = document.querySelector("#status");

const bookCardContainer = document.querySelector(".book-card-container");
const library = [];
const book1 = new Book("apple", "Mary", 323, "In Progress");

addBookButton.addEventListener("click", (e) => { 
  if(newBookTitle.value=="" || newBookAuthor.value=="" || newBookPages.value=="" || newBookPages.value=="0"){
    console.log("empty");
  }else{
    let book;
    let bookStatus;

    if (newBookStatus.value == "unread"){
      bookStatus = "Unread";
      bookProgess = "0";
    }else if (newBookStatus.value == "in_progress"){
      bookStatus = "In Progress";

    }else if (newBookStatus.value == "completed"){
      bookStatus = "Completed";
      bookProgess = newBookPages.value;
    }
    book = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, bookStatus);
    addBooktoLibrary(book);
    console.table(library);
    displayBookCard();
    bookForm.style.visibility = "hidden";
  }
});

function displayBookCard(){
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  const bookCardTitle = document.createElement("div");
  bookCardTitle.className = "book-card-title";
  const bookCardAuthor = document.createElement("div");
  bookCardAuthor.className = "book-card-author";
  const bookCardTotalPages = document.createElement("div");
  bookCardTotalPages.className = "book-card-total-pages";
  const bookCardPagesText = document.createElement("div");
  bookCardPagesText.className = "book-card-pages-text";
  const bookCardStatus = document.createElement("div");
  bookCardStatus.className = "book-card-status";
  const bookCardStatusButton = document.createElement("div");
  bookCardStatusButton.className = "book-card-status-button";
  const deleteButton = document.createElement("div");
  deleteButton.className = "delete-button";

  bookCardTitle.textContent = library[library.length - 1].title;
  bookCardAuthor.textContent = "by " + library[library.length - 1].author;
  bookCardTotalPages.textContent = library[library.length - 1].pages;
  bookCardPagesText.textContent = "pages";
  bookCardStatus.textContent = library[library.length - 1].readStatus;
  bookCardStatusButton.textContent = library[library.length - 1].readStatus;
  deleteButton.textContent = "Delete";

  bookCardContainer.appendChild(bookCard);
  bookCard.appendChild(bookCardTitle);
  bookCard.appendChild(bookCardAuthor);
  bookCard.appendChild(bookCardTotalPages);
  bookCard.appendChild(bookCardPagesText);
  bookCard.appendChild(bookCardStatus);
  bookCard.appendChild(bookCardStatusButton);
  bookCard.appendChild(deleteButton);
}

function Book(title, author, pages, readStatus){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBooktoLibrary(book){
  library.push(book);
}


//addBooktoLibrary(book1);
//addBooktoLibrary(book1);
//addBooktoLibrary(book1);
//addBooktoLibrary(book1);
//addBooktoLibrary(book1);

console.table(library);