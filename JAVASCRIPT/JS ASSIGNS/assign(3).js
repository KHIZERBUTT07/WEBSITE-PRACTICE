// JAVASCRIPT 3RD ASSIGNMENT

// pop and push:

// Initial array of fruits
var fruits = ["apple" ,"bannana",  "orange",  "grape"];
// Function to display available fruits
console.log('fruits', fruits);
console.log("Customer Purchase",fruits.pop());
console.log('Avaialable Fruits',fruits);
console.log("Customer Purchase",fruits.pop());
console.log('Avaialable Fruits',fruits);

var newFruit = prompt('Enter a fruit name which you want to add');
fruits.push(newFruit);
console.log('newFruit','is added in stock');
console.log('Avaialable Fruits',fruits);

var newFruit = prompt('Enter another fruit name which you want to add');
fruits.push(newFruit);
console.log('newFruit','is added in stock');
console.log('Avaialable Fruits',fruits);

// shift and unshift

var fruits= ["Apple","Bannana","Cherry","Dates","Elderberry"];
console.log("Current fruits in stock");

console.log(fruits);
console.log('A new shipment of fruits has arrrived');
console.log('newly arrived fruit is', fruits.shift());
var newFruit = prompt('Enter a name of a fruit to add in stock');
fruits.unshift(newFruit);
console.log("Updated fruits in stock");
console.log(fruits);

// splice

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("current numbers of array");
console.log(numbers);

var start = prompt("Enter starting index of number you want to remove");
var end = prompt("Enter last index of number you want to remove");
numbers.splice(start,end);
console.log(numbers);

// slice

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("current numbers of array");
console.log(numbers);

var userNumber = prompt("Enter a quantity of number you want to remove");
numbers = numbers.slice(userNumber);
console.log('numbers');

var userNumbered = prompt("Enter another quantity of number you want to remove");
numbers = numbers.slice(userNumbered);
console.log('numbers');

console.log(numbers);

// length

var numbers = [1,2,3,4,5,6,7,8,9,10];
var numbered = 0;
for(var i=0; i<numbers.length;i++){
    numbered+= numbers[i]
};
var average = numbered/numbers.length;
console.log("The average of the numbers is:",average);