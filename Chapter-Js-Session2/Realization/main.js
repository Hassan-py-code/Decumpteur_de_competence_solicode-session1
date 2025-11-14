

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

  {
    code: 3,
    title: "aou Don’t Know JS Yet",
    author: "Kyle Simpson",
    year: 2020,
    price: 500,
    available: true,
  },
];



// Select elements
let list_books = document.querySelector(".list-books");
let formulaire = document.querySelector("form");
let searchInput = document.getElementById("searchInput");
let sort_button=document.querySelector(".sort");


// ------MAIN DISPLAY FUNCTION-----//

function Add_books_in_catalog(books = library) {
  list_books.innerHTML = "";

  let Available = 0;
  let total = 0;
  let count = books.length;

  books.forEach((element, index) => {
    let div = document.createElement("div");
    div.classList.add("books");
    
    div.innerHTML = `
      <p>Code: ${element.code}</p>
      <p> 📘Title : ${element.title}</p>
      <p> 🧛‍♀️Author: ${element.author}</p>
      <p> 📅 Year:  ${element.year}</p>
      <p>Available: ${element.available ? "✅" : "❌"} </p> 
      <p> 💰Price:  ${element.price}$</p>

      <div class="btn">
        <button class="remove_book"> <i class="fa-solid fa-trash"></i> </button>
        <button class="reserved">Reserver</button>
      </div>
    
    `;

    list_books.appendChild(div);
    total += Number(element.price);
    Available += Number(element.available);
    
    // Delete button
    div.querySelector(".remove_book").addEventListener(("click"), () => {
      let confirmDelete = confirm("Do you want to remove this book?");
      if (confirmDelete) {
        library.splice(index , 1);
        Add_books_in_catalog();
      }
    });
      
  // let reserv=div.querySelector(".reserved");
  if(element.available){
      

      div.querySelector(".reserved").addEventListener("click",()=>{
         element.available = false;
         Add_books_in_catalog();
      });
       
      
  }else{
     
    div.querySelector(".reserved").textContent="Reserver";
    div.querySelector('.reserved').style.background="#f35764";
  

  };
  });  //end function



  // ----Add this result in browser-----
   document.querySelector(".Total-books").textContent = count;
   document.querySelector(".price_of_book").textContent = total.toFixed(2) + "$";
   document.querySelector(".total-available").textContent = Available;
   
  //  manage to expensive books in library
      let expensive = library.reduce((element, curr) =>
        curr.price > element.price ? curr : element
    );

   document.querySelector("#expensive_Book").textContent = expensive.price + "💰" + "code book is " +  expensive.code;

  }

// input to search any book by title
searchInput.addEventListener("input",()=>{
   let query = searchInput.value.toLowerCase().trim();
  
  // Filter by title (you can also include )
  let filteredBooks = library.filter((book) =>
      book.title.toLowerCase().includes(query)
  );

  // Update the list
  Add_books_in_catalog(filteredBooks);
});

//-----sort button A-Z-----//

let ascending=true;
sort_button.addEventListener("click", () => {
  let sort_library = library.sort((A, Z) =>
   
    ascending ? A.title.localeCompare(Z.title) : Z.title.localeCompare(A.title) 

  );

  ascending =! ascending;
   
  //-------Change text-content in sort_button-------//
  sort_button.textContent = ascending ? "A-Z" : "Z-A";
  
  Add_books_in_catalog(sort_library);

});


//  ----form to submit data book-----
formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // creat new library
  let newBook = {
    code: Number(document.querySelector("#code").value),
    title: document.querySelector("#title").value,
    author: document.querySelector("#Author").value,
    year: document.querySelector("#Years").value,
    price: Number(document.querySelector("#price").value),
    available: document.getElementById("available").checked,
  };
  
  library.push(newBook);
  alert("✅ Book added successfully!");
  Add_books_in_catalog();
  formulaire.reset();

  // Switch back to catalogue view
  document.getElementById("add_in_form").style.display = "none";
  sort_button.style.display="block";
  document.getElementById("searchInput").style.display="block";
  document.getElementById("container").style.display = "block";
 
});


document.getElementById("showForm").addEventListener("click", () => {
  document.getElementById("add_in_form").style.display = "block";
  document.getElementById("container").style.display = "none";
   document.getElementById("searchInput").style.display="none";
    sort_button.style.display="none";
});

document.getElementById("showCatalog").addEventListener("click", () => {
  document.getElementById("add_in_form").style.display = "none";
  document.getElementById("container").style.display = "block";
  document.getElementById("searchInput").style.display="block";
  sort_button.style.display="block";
});


//call this  function
Add_books_in_catalog();
