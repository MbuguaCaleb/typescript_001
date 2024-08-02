//Types of functions

//(a)Named Functions

//We are adding types to the function
//The function can only take in two numbers
//it is good practice for functions to have return types so that you do not forget to add the return types
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(add(2, 3));

//Method 2 (Arrow Functions)
const substract = (num1: number, num2: number): number => num1 - num2;
// console.log(substract(5, 4));

//Method 3
const multiply = function (num1: number, num2: number): number {
  return num1 * num2;
};

// console.log(multiply(5, 4));

//adding an Optional Parameter in a method
//num3 is Optional but when provided must be a number
function addThree(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(addThree(1, 2));
console.log(addThree(1, 2, 5));

//Adding methods with default Parameters
//When num3 is not provided, default Value 10 will be used and is used.
const subtractDefaultParam = (num1: number, num2: number, num3: number = 10) =>
  num1 - num2 - num3;

console.log(subtractDefaultParam(4, 5));
console.log(subtractDefaultParam(4, 5, 6));

//Complex function, that takes in an array as an argument
//we can use spread operator to reference complex types
function add2(num1: number, num2: number, ...num3: number[]) {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

//Rest Parameters
console.log(add2(2, 3, 4, 5, 6, 7, 8));

//Generics are more dynamic
//we can have generic place holders. and whatever is returned will replace the generic place holder
//When using generics we assign the return types dymanically.
// has a <> of the dymanic type after the name of the function
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

//calling a function in the generic style
console.log(getItems<number>([1, 2, 3, 4, 5]));
console.log(getItems<string>(['one', 'Two', 'Three']));
