// Temporary in-memory database
let library = [
  {
    code: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    price: 200,
    available: true,
  },
  {
    code: 2,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
    price: 3,
    available: true,
  },
  {
    code: 3,
    title: "You Don’t Know JS Yet",
    author: "Kyle Simpson",
    year: 2020,
    price: 500,
    available: true,
  },
];

// Available  book
let total_available=document.querySelector(".total-available");
let list_books = document.querySelector(".list-books");
let totla_books = document.querySelector(".Total-books");
let clculation_books_price = document.querySelector(".price_of_book");
let average_price = document.querySelector(".average_price");
let formulaire = document.querySelector("form");



function Add_books_in_catalog() {
  list_books.innerHTML = "";
  
  let Available =0;
  let total = 0;
  let count = library.length;

  library.forEach((element, index) => {
    let div = document.createElement("div");
    div.classList.add("books");
    div.innerHTML = `
      <p>Code: ${element.code}</p>
      <p>Title: 📘 ${element.title}</p>
      <p>Author:🧛‍♀️ ${element.author}</p>
      <p>Year: 📅 ${element.year}</p>
      <p>Available: ${element.available ? "✅" : "❌"} </p> 
      <p>Price: 💰 ${element.price}$</p>
       <div class="btn">
         <button>Remove Books</button>
    </div>
    `;
 
   
    list_books.appendChild(div);
    total += Number(element.price);
    Available += Number(element.available);

      div.querySelector(".btn").addEventListener("click", () => {
      let confirmDelete = confirm("Do you want to remove this book?");
      if (confirmDelete) {
        library.splice(index, 1);
        Add_books_in_catalog();
      }
    });
  });

  totla_books.textContent = count;
  clculation_books_price.textContent = total.toFixed(2);
  average_price.textContent = (total / count).toFixed(2) ;
  total_available.textContent=Available;
}


const jsConfetti = new JSConfetti();

formulaire.addEventListener("submit", (event) => {

  event.preventDefault();

  let newBook = {
    code: document.querySelector("#code").value,
    title: document.querySelector("#title").value,
    author: document.querySelector("#Author").value,
    year: document.querySelector("#Years").value,
    price: document.querySelector("#price").value,
    available: document.getElementById("available").checked,
  };

  library.push(newBook);
  alert(" ✅ Book added successfully!");
  Add_books_in_catalog();
  formulaire.reset();

  jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 500,
    });

  // Switch back to catalogue view
  document.getElementById("add_in_form").style.display = "none";
  document.getElementById("container").style.display = "block";
});

// Show/Hide sections
document.getElementById("showForm").addEventListener("click", () => {
  document.getElementById("add_in_form").style.display = "block";
  document.getElementById("container").style.display = "none";
});

document.getElementById("showCatalog").addEventListener("click", () => {
  document.getElementById("add_in_form").style.display = "none";
  document.getElementById("container").style.display = "block";
});

// Display initial books
Add_books_in_catalog();
