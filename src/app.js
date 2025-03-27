import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];




//const myElement = document.getElementById('myElement')
//console.log(myElement)
//function randomnumber(length){
 // return Math.floor(Math.random * length -1);
}


function getRandomPosition (){
  return myArray (randomnumber(myArray.length));
}


window.onload = function() {

  
const arrayElement = who[Math.floor(Math.random) * who.length];
const arrayElement1 = action[Math.floor(Math.random) * action.length];
const arrayElement2 = what[Math.floor(Math.random) * what.length];
const arrayElement3 = when[Math.floor(Math.random) * when.length];

 const myElement = document.getElementById('myElement')

 myElement.innerHTML = randomnum

  console.log(arrayElement);
  console.log(arrayElement1);
  console.log(arrayElement2);
  console.log(arrayElement3);
};
