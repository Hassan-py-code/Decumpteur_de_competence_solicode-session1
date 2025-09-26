


//loop for

for (let i = 1; i <= 5; i++) {
  console.log("Itération n° " + i);
};

//loop while
let compteur = 1;
while (compteur <= 3) {
  console.log("Compteur : " + compteur);
  compteur++;
};

//break and continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // saute le 3
  console.log(i);
}


for (let i = 1; i <= 10; i++) {
  if (i === 5) continue; // sauter le 5
  console.log("Nombre : " + i);
}