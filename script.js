const addBookButton = document.querySelector("#add-book-button");

const Library = [];
const book1 = new Book("apple", "Mary", 323, "In Progress");

addBookButton.addEventListener("click", (e) => { 
  console.log("buttton");
  let book;
  book = new Book();
  addBooktoLibrary(book1);
  console.table(Library);
});



function Book(title, author, pages, readStatus){
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

function addBooktoLibrary(book){
  Library.push(book);

}


//addBooktoLibrary(book1);
//addBooktoLibrary(book1);
//addBooktoLibrary(book1);
//addBooktoLibrary(book1);
//addBooktoLibrary(book1);



console.table(Library);