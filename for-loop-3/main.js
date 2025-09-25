
let you_age=20;

if(you_age < 18 ){
     console.log("vous etes mineur")
}else if (you_age === 18){
      console.log("vous venez d'atteindre la majorite")
}else{
     console.log("vous etes majeur")
}



//for lop

for (let index = 0; index < 10; index++) {
     console.log(index)
     
}


// break and continue  
 for (let i = 0; i <= 5; i) {
     if(i===3){
           continue
     }

     console.log("Hello")
     
 }


 let x = 0;
do {
  console.log("Valeur de x : " + x);
  x++;
} while (x < 2);
