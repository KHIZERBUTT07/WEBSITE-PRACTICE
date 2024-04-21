// ==================================
// Q;no1
// ==================================

let input = prompt("Enter numbers separated by commas:");
let arr = input.split(",").map(Number);

let modifiedArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        modifiedArr.push(arr[i] * 2);
    }
}

console.log(modifiedArr);


// ==================================
// Q;no2
// ==================================

while (true) {
    var password = prompt("Enter a password: ");
    var firstChar = password[0];
    if (password.length < 6 || (firstChar >= '0' && firstChar <= '9') || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        alert("Password must contain at least 6 characters, start with an alphabet, and contain both alphabets and numbers.");
    } else {
        console.log("Password accepted.");
        break;
    }
}
// ==================================
// Q;no3
// ==================================

var arr1 = prompt("Enter the elements of the first array (separated by commas):").split(",").map(Number);
var arr2 = prompt("Enter the elements of the second array (separated by commas):").split(",").map(Number);
var result = [];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            break;
        }
    }
}

console.log("Common elements:", result);

// ==================================
// Q;no4
// ==================================

var number = parseInt(prompt("Enter a number:"));
var isPrime = true;

// Check if the number is less than 2, in which case it's not prime
if (number < 2) {
    isPrime = false;
} else {
    // Check for factors from 2 to the square root of the number
    for (var i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any other number, it's not prime
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(number)
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}


// ==================================
// Q;no5
// ==================================

var nestedArrayInput = prompt("Enter a nested array (e.g., [[1, 2], [3, 4], [5, 6]]):",'[[1, 2], [3, 4], [5, 6]]');

var nestedArray = JSON.parse(nestedArrayInput);

var flattenedArray = [];

for (var i = 0; i < nestedArray.length; i++) {

    for (var j = 0; j < nestedArray[i].length; j++) {
        flattenedArray.push(nestedArray[i][j]);
        console.log(nestedArray.length)
    }

}

console.log(flattenedArray); 