//DOM JAVASCRIPT

//Document Object Model

//Datatypes

//node.js

//string

let myName = "Ifiok";

// console.log(typeof myName);

let text = "Shakespear said, '....'";

// console.log(text)
// console.log(typeof text)

//number

let x = 5;

// console.log(typeof x);

//array
let orange;
const num = [1, 2, 3, 4, 5, 6];
    //index=[0, 1, 2, 3, 4, 5];
const textArr = ["he", "she", "himself", "herself"];
        //index=[0,      1,       2,         3];
const fruits = ["mango", "orange", orange = 3, 10]

const objArr = [{ name: "Wisdom" }, { size: "XL" }, { shoeSize: "45" }, { color: "dark" }];

//Using loops to access each member of the array
/*for (variable declaration and assignment; range; counter){
}
*/

//array.length

console.log("Obj array length is: ",objArr.length)
for (let index = 0; index < objArr.length; index++){
    console.log(index)
    console.log(objArr[index])
}

let counter = 1  //Variable declaration and assignment
while (counter <= 10) {  //defining the range
    console.log(counter)
    counter++   //Incrementing
}
//Array.push method adds an item to the end of the array

num.push(7)


console.log("Num has transformed to this: ", num)

fruits.pop()

console.log(fruits)

//Use the index to access members of an array

// console.log(num[3])
// console.log(textArr[1], " made a nice meal.");


// console.log(typeof num, typeof textArr, typeof fruits)
// console.log(fruits);

//object

const obj = {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    dob: "10/10/1900",
    age: 124,
    colorOfShirts: ["blue", "red", "yellow", "brown"]
}

//+ sign is used for string concatenation
//Accessing the object property using the dot notation 
console.log("How old is John? ", obj.firstName + " is" + " " + obj.age + " years old");

//Accessing obj  property using square bracket
console.log(obj["dob"]);


console.log(typeof obj)

//undefined

let p;

// console.log(p)
console.log(typeof p)

//null

let a = null;

console.log(a)
console.log(typeof a)

//Boolean - true or false

let r = true;

let night = false;

//function declaration

//function keyword + name of function + () + {}
function sing() {  
}

//second method of writing function
//variable declaration + name of function + "=" + "arrow function" + {}
const pray = () => {
}

//third method
//variable declaration + name of function + "=" + function keyword + () + {}
const play = function(){

}

const btn = document.querySelector("button");
btn.style.backgroundColor = "red";
btn.style.fontSize = "20px"


const changeStyle = () => {
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    btn.style.padding = "20px"
}

btn.addEventListener("mouseover", changeStyle)
