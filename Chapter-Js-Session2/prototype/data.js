// Temporary database of books (in memory only);

let library = [
  {
    code: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    available: true,
    price: 150
  },
  {
    code: 2,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
    available: true,
    price: 200
  },
  {
    code: 3,
    title: "You Don’t Know JS Yet",
    author: "Kyle Simpson",
    year: 2020,
    available: false,
    price: 180
  },
  {
    code: 4,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    year: 1999,
    available: true,
    price: 220
  },
  {
    code: 5,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    available: false,
    price: 140
  }
];


let list_books=document.querySelector(".list-books");

// let books=document.querySelector(".books");

let add_cards_books=library.forEach(element => {

    let my_div=document.createElement("div");
    my_div.classList.add("books");
    my_div.innerHTML=`
                <p>Code : <span>${element.code}</span></p>
                <p>Title : <span>${element.title}</span></p>
                 <p>author : <span> ${element.author} </span></p>
                 <p>year : <span> ${element.year} </span></p>
                
                <div class="form-group">
                     <label for="disponible">Disponible : </label>
                    <select  id="disponible">
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                    </select>
                </div>

                 <p> price : <span>${element.price}</span>$</p>

                 <div class="btn">
                     <button>Remove Books</button>
                 </div>
    
    `;

   list_books.appendChild(my_div);
});

