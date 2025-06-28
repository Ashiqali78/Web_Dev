console.log("hello Java Script kr lo ")
console.warn("This initiation i")
console.error("Payment Unccessfull")

var a= 10
var b=20
console.log("The sum of a and b =",a+b)
console.log("The multiplication of a and b =",a*b)
console.log("The subtraction of a and b =",a-b)
console.log("The division of a and b =",a/b)

// Print the table of 3 in JavaScript

// using for loop
console.log("Using for loop")
for(var j=0; j<=20; j++){
    console.log("3 x "+j+" = "+(3*j));
}
//using while loop
console.log("Using While loop")
k=1
while(k<=10){
    console.log("4 x "+k+" = "+4*k);
    k++
}
// Comditional Statements
console.log(a>b)
console.log(a>=b)
console.log(a<=b)

alert("This website is not meet the security terms and conditions")
confirm("Do you want to continue? ")
// This is the part where you can change the conditions
var ans = confirm("Do you want to Pay 10$")
console.log(ans) // true for yes false for cancle

var fname = prompt("Enter your first name")
var lname = prompt("Enter your last name")
console.log("Weclcome",fname, lname)

// Java Script Data Types
// -   Premetive(single value variable)
//     -  Number(1, 20, 30.9)
//     -  String('a','Awais')
//     -  Boolen(true, false)
//     -  undefined
//     -  NaN
// -   Reference(multi value variables)
//     -  Array
//     -  Object
//     -  Function

// Condition statements
var age =20
if(age>=18){
    console.log("Yes you can vote:)")
}else{
    console.log("No you can't vote:(")
}

// == only compare values but === compair values as well as data types
a=10
b='10'
if(a===b){
    console.log("Correct")
}else{
    console.log("Incorrect")
}

// functions in JS
function hay(){
    console.log("Hallo Awais this is a function")
}
// calling a function
hay()

function greeting(name){
    console.log("Welcome",name,"to JS course")
}
greeting("Awais")
// Another function Called 1st class function
var abc = function(){
    console.log("Hello this is another way to ini the function")
}
abc()
// Another function called packed errow function
var def = ()=>{
    console.log("This is packed errow function")
}

// var, let, const different ways to declear a variable
let name = "Awais"
const name_1 = "Muhammad Awais" // this value can't be changed
var name_2 ="Mawais" 