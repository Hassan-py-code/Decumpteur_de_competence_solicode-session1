







// input to add book
let push_Add_books = {};


// let btn_books = document.querySelector(".submit-books");

let code = document.querySelector("#code");
let title = document.querySelector("#title");
let Author = document.querySelector("#Author");
let Years = document.querySelector("#Years");
let Price = document.querySelector("#price");
let disponible=document.querySelectorAll("option");



let formulaire = document.querySelector("form");
formulaire.addEventListener("submit", function(event) {

  event.preventDefault(); // Empêche l'envoi par défaut

    push_Add_books.code = code.value;
    push_Add_books.title = title.value;
    push_Add_books.author = Author.value;
    push_Add_books.years = Years.value;
    push_Add_books.price = Price.value;
    push_Add_books.disponible=disponible.value;
    console.log(push_Add_books);
  
});


// btn_books.addEventListener("click", () => {

//     push_Add_books.code = code.value;
//     push_Add_books.title = title.value;
//     push_Add_books.author = Author.value;
//     push_Add_books.years = Years.value;
//     push_Add_books.price = Price.value;
//     push_Add_books.disponible=disponible.value;
    
    
// });

// console.log(push_Add_books);

// console.log(push_Add_books);