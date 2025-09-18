



let list=["B1","B2","B3","B4","B5","B6","B7","B8","B9","B3","B4","B1","B6","B4","B6","B2","B3","B1"];

let choice="B7";

let count = 0;

for (let index = 0; index < list.length; index++) {
     if(choice === list[index]){
        count++
    
    }
    
}
console.log(`Your Choice is   ${choice}  apears  ${count}`);