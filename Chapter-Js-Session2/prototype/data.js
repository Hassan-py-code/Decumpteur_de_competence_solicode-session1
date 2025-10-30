// Temporary database of books (in memory only);

let library = [
  {
    code: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    price: 150
  },
  {
    code: 2,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
    price: 200
  },
  {
    code: 3,
    title: "You Don’t Know JS Yet",
    author: "Kyle Simpson",
    year: 2020,
    price: 180
  },
  {
    code: 4,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    year: 1999,
    price: 220
  },
  {
    code: 5,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    price: 140
  }
];



let list_books=document.querySelector(".list-books");
let totla_books=document.querySelector(".Total-books");
let count=4;




// creat function too book in catalog library
function Add_books_in_catalog(){
      
library.forEach(element => {

    let my_div=document.createElement("div");
    my_div.classList.add("books");
    my_div.innerHTML=`

                <p>Code : <span>${element.code}</span></p>
                <p>Title : <span>${element.title}</span></p>
                 <p>author : <span> ${element.author} </span></p>
                 <p>year : <span> ${element.year} </span></p>

                <p> Disponible :  <span class="Disponible"> Oui </span></p>
                
                <p> price : <span>${element.price}</span>$</p>

                 <div class="btn">
                     <button>Remove Books</button>
                 </div>
    
    `;


  list_books.appendChild(my_div);
  let buttons=my_div.querySelector(".btn");
buttons.addEventListener("click",()=>{
       
    let confirms=confirm("Do you want to remove this book");
    
    if(confirms===true){
      my_div.remove();

      element.code=undefined;
      element.title=undefined;
      element.author=undefined;
      element.year=undefined;
      element.price=undefined;

      totla_books.innerHTML=count--;

    
    }
    
    else{
         return "";
    }

   
   });

});


};


// Call function
Add_books_in_catalog();






