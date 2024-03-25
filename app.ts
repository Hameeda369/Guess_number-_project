#! /usr/bun/env node
console.log("guess a number between 1 to 10");
// now variable create
let a:number=Math.floor(Math.random()*10)
import inquirer  from "inquirer";

while(true){

    let input = await inquirer.prompt
      
        ({name: "guess",type:"number",
    message:"Enter your guess number you want between 1 to 8:"})

    
    // provide code
    let ans:number= input.guess
   if (a==ans)
    {console.log("congratulation your guess number absolutely correct")
break;}
else{console.log("Sorry you guess wrong number try again")}
}