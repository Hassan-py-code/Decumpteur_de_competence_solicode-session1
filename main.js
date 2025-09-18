

//chapter 7
let number1=10;
let number2=5;
let some=number1 + number2;

console.log("The total is", some);




let nom="Ali"; 
const PI=3.14;
console.log("Hello" + navigator);


let a=10;
let b=3;
console.log(a + b ) // you can see in console 13
console.log(a % b) // 1



console.log(5 > 2);
console.log(5 == "5");
console.log(5 === "5");




//Chapter 
//function 

function Name(){
     console.log("Hello bro");
};

// call function Name()

Name();


//function with parameters

function YourAga(age){
      console.log("Your age is " , age);
};

YourAga(22);

// return value

function write(a,b){
     return a + b;
};

let result=write(4,8);

console.log(result); // 12


//chapter 9

let age=18;
if(age >= 18){
      console.log("your age is accept to learn coding")
}else{
     console.log("Your age is not accept to learn codding")
}


//else if and else

let note=14;
if(note >= 16){
      console.log("good");
}else if( note >= 10){
      console.log("Very good");
}else{
     console.log("try again to exam");
}

//swith

let day="Monday";

switch(day){
     case "Monday":
          console.log("Day one ");
          break;
     case  "Tuesday":
        console.log("Day tow");
        break;
     case "Wednesday":
          console.log("day three");
          break
     default:
          console.log("Is not foud day ")
};


let you_age=20;

if(you_age < 18 ){
     console.log("vous etes mineur")
}else if (you_age === 18){
      console.log("vous venez d'atteindre la majorite")
}else{
     console.log("vous etes majeur")
}
