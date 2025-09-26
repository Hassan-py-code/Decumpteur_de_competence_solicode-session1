
// chapter 13 Realisation 
  
// creat list inside object;
let list_with_objects=[
    
    
     {
        name:"Fatim", 
        skills:"Html & CSS & Node",
        code:"C1",
    },

     {
        name:"Mohammed",
        skills:"Python & PHP" ,
        code:"C2",
    },
    {
        name:"ALi",
        skills:"HTML & CSS & JS" , 
        code:"C3",
    },
     {
        name:"Moukhtar",
        skills:"React & tailwind",
        code:"C4",
    },
     {
        name:"Zakaria",
        skills:"HTML & CSS" ,
        code:"C5",
    },
     {
        name:"Brahim",
        skills:"HTML" ,
        code:"C6",
    },
     {
        name:"Hamid",
        skills:"JS & React Node" ,
        code:"C7",
    }, 
     {
        name:"Selma",
        skills:"Figma", 
        code:"C8",
    }, 
];

// Creat function to  guessing;
 
function guessing_of_code(score = 0){

    // creat for loop 
for (let index = 0 ; index < 2 ; index++ ) {
    
    // creat random choice in list_with_objects;
    let random = Math.floor( Math.random() * list_with_objects.length );
    
    // access each symbol using random 
    let code = list_with_objects[random].code;
    
    // creat prompt to aske me which one code of this skills
    let My_promet = prompt(`Write code of this skilles ${ list_with_objects[random].skills } `);
    
    // creat condition My_prompt if not write any code I print Message and break loop ;
    if( My_promet === "" ){
        alert(`Please Add code Of this skills: ${ list_with_objects[random].skills }`);
        index--;
        continue; 
        
    }
    // condition 2 
    else if( My_promet === code ){
          
        score++;
        alert( `You Finding this Key is correct ${score}` );
          

    }
    // condition 3 You Write any somthing don't similar code 
    else{
         
        alert( `Retry guessing the Code and you have ${score} / ${list_with_objects.length}` );
        
    };
    
    
};

};


// call this function
guessing_of_code();


