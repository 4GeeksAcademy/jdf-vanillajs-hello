import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const myElement = document.getElementById('myElement')
console.log(myElement)
function randomnumber(length){
  return Math.floor(Math.random * length -1);
}


function getRandomPosition (){
  return myArray (randomnumber(myArray.length));
}


window.onload = function() {
 const randomnum = randomnumber();

 const myElement = document.getElementById('myElement')

 myElement.innerHTML = randomnum

  console.log();
};
