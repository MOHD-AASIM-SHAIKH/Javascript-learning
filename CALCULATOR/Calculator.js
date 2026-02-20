const add = (a,b)=> a+b;
const sub = (a,b)=> a-b;
const div = (a,b)=> a/b;
const mul = (a,b)=> a*b;

const prompt = require("prompt-sync")();
let num1 = Number(prompt("Enter your first number:"));
let num2 = Number(prompt("Enter your seond number:"));
let operation = prompt("Enter he operation +,-,*,/ : ");

if(isNaN(num1)||isNaN(num2)){
    console.log("invalid number ");
} else{
    switch(operation){
        case '+' :
            console.log(add(num1,num2));
            break;
        case '-':
            console.log(sub(num1,num2));
            break;
        case '/':
            if(num2 == 0){
                console.log("cannot divide by zero");
            }else{
                console.log(div(num1,num2));
            }
            break;
        case '*':
            console.log(mul(num1,num2));
            break;
        default:
      console.log("Invalid operation");                
    }
        
}
