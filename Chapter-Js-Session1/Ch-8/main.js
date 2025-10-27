

function direBonjour() {
  console.log("Bonjour !");
};

direBonjour(); //call this function



function saluer(nom) {
  console.log("Bonjour " + nom + " !");
}
saluer("Bro"); // Affiche "Bonjour Ali !"





//valeur de retour

function addition(a, b) {
  return a + b;
}
let resultat = addition(4, 6);
console.log(resultat); // 10


//Ajouter une fonction dans main.js

function addition(a, b) {
  return a + b;
}

let somme = addition(8, 5);
console.log("La somme est : " + somme);