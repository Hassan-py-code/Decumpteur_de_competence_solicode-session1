



let age = 20;

if (age >= 20) {
  console.log("Tu es majeur.");
} else {
  console.log("Tu es mineur.");
};



// else if and else:

let note = 14;

if (note >= 16) {
  console.log("Excellent !");
} else if (note >= 10) {
  console.log("Bien, tu as la moyenne.");
} else {
  console.log("En dessous de la moyenne.");
};



//switch
let jour = "lundi";

switch (jour) {
  case "lundi":
    console.log("Début de semaine !");
    break;
  case "vendredi":
    console.log("Presque le week-end !");
    break;
  default:
    console.log("Jour standard.");
};


let myage = 20;

if (myage < 18) {
  console.log("Vous êtes mineur.");
} else if (myage === 18) {
  console.log("Vous venez d’atteindre la majorité !");
} else {
  console.log("Vous êtes majeur.");
};
