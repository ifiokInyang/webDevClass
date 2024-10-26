

//JAVASCRIPT OPERATORS

//Arithmetic Operators ===>  +, -, /, *, %(modulo)

let a = 2;

// console.log(a + 19)

let b = 3;

// console.log(a - b)

// console.log(a * b)

// console.log(a / b)

// console.log(a % b)
//remainder after division: remainder of the division between "a" and "b"

//Assignment Operators ===> +=, -=, *=, /=

let c = 4;

let e = c + 5;

console.log(e) //Result = 9

console.log(c -= 10); //Result = -6
// console.log(c += 6);
//Result = 10


let d = c + 5;  

console.log(d); //Result = -1
/*console.log(d) //Result = 15
*/


// Comparison Operators ===> ==, !=, <, >, <=, >=, === (strictly equal to), !== (not strictly equal to)
//Yields or returns a boolean (true or false)

let g = 10; //number
let h = "50";  //string
let i = 11; //number
/*
console.log(g == h) //Normal Equality comparison

console.log(g === i) //Strict equality sign compares both the value and datatype

console.log(g != h) //true

console.log(g !== i) //true

console.log(h > i)  //true

console.log(g >= h) //false

*/
//Logical Operators  ===> && - logical and, || - logical or, ! - not
//For logical and (&&), the two sides have to evaluate to true for that expression to be true, else it will return false.

//For logical or (||), one of the sides must evaluate to true for it to be true
let j = 10; //number
let k = "50";  //string
let l = 11; //number

let n = (k > l) || (l > 2)


console.log(n)



let m = (j > k) && (l > j);

// console.log(m)
//false


true && true //true
false && true; //false
true && false; //false

/*
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
*/


//Conditional statement ==> if, else if, else
/*if (condition) {
  //action
} else if (condition){
 //action
 } else {
 //action
  }
  */

let temperature = 37;

if (temperature > 36) {
    console.log("Ouch!! The room is hot, I need a fan")
} else if (temperature >= 30 || temperature < 34) {
    console.log("I think the room temperature is mild")
} else {
    console.log("Oh, wow, what temperature is this?")
}


//DOM Javascript

//Document Object model

//Methods of accessing the DOM

/*
1) document.getElementById("nameOfId") //return the first element with the specified id
2) document.getElementsByClassName("nameOfClass") //return an array-like object of all the elements that match that class name
document.getElementsByTagName("h1") //returns all the elements with that tag name
document.querySelector("#nameOfId")
document.querySelector(".nameOfClass")

document.querySelectorAll()
*/

const head = document.getElementById("head")
console.log("Our heading element is: ", head)

const paragraph = document.getElementsByClassName("paragraph")

console.log(paragraph)

const head2 = document.querySelector("#head")

console.log(head2)

//Created the element
const heading = document.createElement("h1")
// console.log(heading);
//Created the inner text
heading.innerHTML = "This is heading 2"
console.log(heading)

//We appended it to the html document
head2.append(heading)

heading.setAttribute("id", "dynamicElement")
console.log(heading)

const dynamicElement = document.querySelector("#dynamicElement");

dynamicElement.style.backgroundColor = "green"
dynamicElement.style.color = "white"

head2.addEventListener("mouseover", () => {
    dynamicElement.style.display = "none"
})