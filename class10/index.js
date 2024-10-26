//Node JS is a runtime environment for Javascript

//Semicolon is used to end a statement in Javascript


//Compiler will translate your human-readable code into machine language 
//Machine language is made up of 0 and 1




//Comments in JS

//Single line comment

/* THis 
is
a
multi
line
comment */

//Variables and Datatypes

//Variable can be likened to a box;

//Declaring variables





//Method - 1: Using the var keyword

var fruits = "mango, orange, banana"; //We have declared and initialied the variable.

console.log(fruits)
var clothes;

clothes = "shirt, trouser, skirt";

console.log(clothes)

//Method - 2: Using the let keyword

let x;

x = 5;

let y = 10;

console.log(x, y);

//Method - 3: Using the const keyword

const pie = 3.142; //We have declared and initialied the variable.

console.log(pie)
// Variables are initialized/assigned after they are declared

/*
var - function scoped
- access it before declaration
- you can reassign/reinitialize it
- you can redeclare
*/

console.log(p) //undefined

var p = 10;

console.log(p); //10


function greet() {
    var nameOne = "Michael"
    console.log(nameOne)
    if (true) {
         nameOne = "Wisdom"
        console.log(nameOne)
    }
    console.log(nameOne)
    var nameOne = "Peter"
    // console.log(nameOne)
}

//For every function, you need to call (invoke) it
greet();

// console.log(nameOne)

/*
let - block scoped
- can't access it before declaration
- you can not reassign/reinitialize it
- you can not redeclare it within the same scope
*/

// console.log(u);

let u = 20;

console.log(u)

function maths () {
    let o = 12;
    console.log(o);
    
    if (true) {
        let o = 22;
        console.log(o);
        
    }
    o = 45;
    console.log(o);
    
}

maths();


/*
const - block scoped
- can't access it before declaration
- you can not reassign/reinitialize it
- you can not redeclare it within the same scope
- you must assign it as you are declaring it..
- Used to store
*/

function arts() {
    const gallery = "drawings, paintings"
        console.log(gallery);

    if (true) {
        const gallery = "colouring"
            console.log(gallery);

    }

    // const gallery = "mosaic" //Cannot redeclare
    //gallery = "mosaic" //Cannot reassign
    // console.log(gallery);
    

}

arts()

