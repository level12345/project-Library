const categories = ["Book", "Author", "Pages"];
const myLibrary = [];
const authorLibrary = [];
const pagesLibrary = [];
const stopRepeats = [];
let i = 0;

let button_creator = document.createElement("button");
button_creator.setAttribute("id", "myButton");
document.body.appendChild(button_creator);

let button_node = document.createTextNode("New Book");
button_creator.appendChild(button_node);

// const button_clicked = document.querySelector("#myButton");
// button_clicked.addEventListener("click", addToTable);

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
//const closeSubmitModal = document.querySelector(".button-submit");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// closeSubmitModal.addEventListener("click", () => {
//   modal.close();
// });

function table_create() {
  let table_creator = document.createElement("table");
  table_creator.setAttribute("id", "myTable");
  document.body.appendChild(table_creator);
}

function grow_table() {
  let tr_creator = document.createElement("tr");
  tr_creator.setAttribute("id", "Header");
  document.getElementById("myTable").appendChild(tr_creator);

  for (let index = 0; index < categories.length; index++) {
    let td_creator = document.createElement("td");
    let text_node = document.createTextNode(categories[index]);
    td_creator.appendChild(text_node);
    document.getElementById("Header").appendChild(td_creator);
  }

  for (let index = 0; index < myLibrary.length; index++) {
    let tr_creator = document.createElement("tr");
    tr_creator.setAttribute("id", myLibrary[index]);
    document.getElementById("myTable").appendChild(tr_creator);

    let td_creator = document.createElement("td");
    let text_node = document.createTextNode(myLibrary[index]);
    td_creator.appendChild(text_node);
    document.getElementById(myLibrary[index]).appendChild(td_creator);

    let author_creator = document.createElement("td");
    let author_node = document.createTextNode(authorLibrary[index]);
    author_creator.appendChild(author_node);
    document.getElementById(myLibrary[index]).appendChild(author_creator);

    let page_creator = document.createElement("td");
    let page_node = document.createTextNode(pagesLibrary[index]);
    page_creator.appendChild(page_node);
    document.getElementById(myLibrary[index]).appendChild(page_creator);
  }
}

const form_submission_clicked = document.querySelector("#submission");
form_submission_clicked.addEventListener("click", submitFormClicked);

function submitFormClicked(e) {
  i++;
  e.preventDefault();
  let form_book_intake = document.getElementById("book_intake");
  let form_author_intake = document.getElementById("author_intake");
  let form_page_intake = document.getElementById("page_intake");

  let book_intake = String(form_book_intake.value);
  let author_intake = String(form_author_intake.value);
  let page_intake = String(form_page_intake.value);
  if (!stopRepeats.includes(book_intake)) {
    stopRepeats.push(book_intake);
    myLibrary.push(book_intake);
    authorLibrary.push(author_intake);
    pagesLibrary.push(page_intake);
  } else {
    alert("Nice Try ass hole");
  }

  if (i > 1) {
    const table_remover = document.getElementById("myTable");
    table_remover.remove();
  }
  console.log("Button Clicked");

  table_create();
  grow_table();
}

// function addToTable(e) {
//   i++;

//   e.preventDefault();
//   if (i > 1) {
//     const table_remover = document.getElementById("myTable");
//     table_remover.remove();
//   }

//   table_create();

//   //submitFormClicked(book_intake);

//   let new_book = String(prompt("What new book you wanna add? Nigguh"));
//   myLibrary.push(new_book);

//   grow_table();
// }
