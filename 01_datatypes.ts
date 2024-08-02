// 01----->String DataType
let lname: string;
lname = 'Caleb';

//Bacause TypeScript is Strict, it only gives you the functions you need.
let newName = lname.toUpperCase();

console.log(newName);
// lname =10;

//Number DataType
let age: number;

age = 25;

//Adantage of TypeScript
//TypeSafety

// age = "25"
age = 25.5;

let dob = '25';
let newDOB = parseInt(dob);

//Be keen on handling Booleans in TypeScript
let isValid: boolean = true;

//You must assign a value before a boolean in typescript.
//TypeScript is Safer // JavaScript would just have thrown undefined, and you would only know after you run your code
//Typescript configured in strict mode, will throw an error when you try to access a value that is not defined.

//Array DataType
//Initializing a String Array (Two ways)

let empList: string[];
let numberList: Array<number>;

empList = ['caleb', 'Mbugua'];
numberList = [1, 2, 3, 4, 5];
let newNum = numberList[0];

//Higher order methods  (reduce method calculates the sum of items in our List)
let results = numberList.filter((num) => num > 2);
let employee = empList.find((emp) => emp === "caleb");

let sum = numberList.reduce((acc,num)=> acc + num );
console.log(results);
console.log(employee);
console.log(sum);

//Enums
//An enum is a type that i create to restrict my users

//For non Changing dataTypes. Example Enums, We should use
//const because of the Compilation process.

const enum Color{
    Red,
    Green,
    Blue
}


let c:Color = Color.Green;

let swapNumbs:[number,number];

function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1];
}

swapNumbs = swapNumbers(10,20);
let newNumberTwo = swapNumbs[1];


//Tuples are more Strict in terms of what we can be able to access at each Index.
//Tuples are therefore Safer


//Any DataType
//When we assign a variable to be of Type Any we can assign any variable, in that particular datatype
let department;

department = "IT";
department = 10;


//It is not adviseable to use the any datatype in production
