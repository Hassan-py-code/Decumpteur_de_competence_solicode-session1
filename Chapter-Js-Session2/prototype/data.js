// Temporary database of books (in memory only);

let library = [
  {
    code: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    price:2
  },
  {
    code: 2,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
    price: 3
  },
  {
    code: 3,
    title: "You Don’t Know JS Yet",
    author: "Kyle Simpson",
    year: 2020,
    price: 5
  },
  
];






let list_books=document.querySelector(".list-books");
let totla_books=document.querySelector(".Total-books");
let clculation_books_price=document.querySelector(".price_of_book");
let average_price=document.querySelector(".average_price");



let count=library.length;




// creat function too book in catalog library
function Add_books_in_catalog(){
      
      let total = 0;
  for (let book of library) {
    total += book.price;
  }
   
   clculation_books_price.innerHTML=`${total}$`;
   average_price.innerHTML = total / count ;
   

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
  totla_books.innerHTML=count;



   
  
let buttons=my_div.querySelector(".btn");
buttons.addEventListener("click",()=>{
       
    let confirms=confirm("Do you want to remove this book");
    
    if(confirms===true){
      my_div.remove();

      // element.code=undefined;
      // element.title=undefined;
      // element.author=undefined;
      // element.year=undefined;
      // element.price=undefined;
      // clculation_books_price.innerHTML=element.price;
       
      totla_books.innerHTML = count---1;
     
      average_price.innerHTML = total / count ;
     
    let bn=total-=element.price;

    // console.log
      
      clculation_books_price.innerHTML=`${bn}$`;
      
       

      
    }
    else{
         return "";
    }

   
   });

});
   
};

// function Add_books_in_catalog() {

//   // 1️⃣ Start total and count outside the loop
//   let total = 0;
  
//   let count = library.length;

//   // 2️⃣ Calculate total value once
//   library.forEach(book => total += book.price);


//   // 3️⃣ Display the initial total and average
//   clculation_books_price.innerHTML = `${total}$`;
//   totla_books.innerHTML = count;
//   average_price.innerHTML = (total / count).toFixed(2);

//   // 4️⃣ Now display all books
//   library.forEach(element => {

//     let my_div = document.createElement("div");
//     my_div.classList.add("books");

//     my_div.innerHTML = `
//       <p>Code : <span>${element.code}</span></p>
//       <p>Title : <span>${element.title}</span></p>
//       <p>Author : <span>${element.author}</span></p>
//       <p>Year : <span>${element.year}</span></p>
//       <p>Disponible : <span class="Disponible"> ${element.available ? "Oui" : "Non"} </span></p>
//       <p>Price : <span>${element.price}</span>$</p>
//       <div class="btn">
//         <button>Remove Book</button>
//       </div>
//     `;

//     list_books.appendChild(my_div);

//     // 5️⃣ Handle Remove Button
//     let button = my_div.querySelector("button");
//     button.addEventListener("click", () => {

//       let confirms = confirm("Do you want to remove this book?");
//       if (confirms) {
//         my_div.remove(); // remove from page

//         // remove from total + count
//         total -= element.price;
//         count--;

//         // update numbers
//         clculation_books_price.innerHTML = `${total}$`;
//         totla_books.innerHTML = count;
//         average_price.innerHTML = count > 0 ? (total / count).toFixed(2) : 0;
//       }
//     });
//   });
// }



// Call function
Add_books_in_catalog();


// function books_add(){
//      let new_library={
//            code: document.querySelector("#code").value,
//            title:document.querySelector("#title").value,
//            Autor:document.querySelector("#Author").value,
//            years:document.querySelector("#Years").value,
//            price:document.querySelector("#price").value,
//      };

//      library.push(new_library);
//      Add_books_in_catalog();
// };



// let formulaire = document.querySelector("form");
// formulaire.addEventListener("submit", function(event) {
   
//    event.preventDefault();  // Empêche l'envoi par défaut
//    books_add();
   
  
// });





// let produits = [
//   { nom: "Stylo", prix: 5 },
//   { nom: "Cahier", prix: 15 },
//   { nom: "Crayon", prix: 3 },
// ];

// console.log("Liste des produits :");
// produits.forEach((p) => console.log(`${p.nom} → ${p.prix} DH`));


// for (let index = 0; index < produits.length; index++) {

//   console.log(produits[index].prix);
// }