// alert(document.getElementById("seven").innerText);

document.getElementsByClassName("number");
var numbers = document.getElementsByClassName('number');

console.log(numbers);

 /*var studentAge= 20+10-20+(10*2);
console.log(studentAge);*/

var count=1;
var countDiv = document.getElementsByClassName('count');
console.log(countDiv)
countDiv

// POST INCREMENT

/* var count=1
count++
count++
console.log(count) */

// POST DECREMENT

/* Var count=1
count--
count-- 
console.log(count) */


// RE ASSIGN

/*var count=10;
count=count+1;
console.log(count); */
  

// CONCATINATING STRING

 /* var _name = 'khizer'
var fatherName = 'butt'
var space = ' '
var fulllName = _name + ' ' + fatherName;
console.log(fullName) */



// Prompt

// var username = prompt(whatIsYourUserName)

// COMPARISON OPERATORS

//    LESS THAN

 var num1 = 10;
var num2 = 20;

var IsNum1IsLessThanNum2 = num1 < num2;
console.log(IsNum1IsLessThanNum2); 


// GREATER THAN 

var num1 = 10;
var num2 = 20;

var IsNum1IsGreaterThanNum2 = num1 > num2;
console.log(IsNum1IsGreaterThanNum2);


// EQUALITY OPERATOR

 var num1 = 10;
var num2 = 20;
var IsNum1EqualsToNum2 = num1 == num2;
console.log(IsNum1EqualsToNum2); 

// LessThanEqualsToOperator

 var num1 = 10;
var num2 = 20;
var IsNum1LessThanEqualsToNum2 = num1 <= num2;
console.log(IsNum1LessThanEqualsToNum2);


// GreaterThanEqualsToOperator

var num1 = 10;
var num2 = 20;
var IsNum1GreaterThanEqualsToNum2 = num1 >= num2;
console.log(IsNum1GreaterThanEqualsToNum2);


// CONDITIONS

 var a = 20;
var b = 20;
if(a==b){
    console.log('ok');
} 

var number = prompt("Give any number to check your number it is EVEN or ODD.");
var remainder = number % 2
var message = "";
if(remainder == 0){
    message = "Your number is Even"
}
else{
    message = "Your number is Odd"
}
alert(message);
