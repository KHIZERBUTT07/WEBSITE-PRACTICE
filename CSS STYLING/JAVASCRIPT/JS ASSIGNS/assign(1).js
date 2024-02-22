// 1) ALERTS 

alert("Wellcome To Javascript Basic Assignment");


// 2)  DECLARING A VARIABLE 

var favouritefood = ("BBQ");
console.log("favouritefood");


// 3) VARIABLES FOR NUMBERS

var num1 = 20;
var num2 = 10;
console.log("Addition", num1 + num2);
console.log("Substraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Division", num1 / num2);


// 4) VARIABLES LEGAL AND ILLEGAL NAMES:

// Legal variable names: snake_case, camelCase, PascalCase

// Illegal variable names: : 1stVariable (starting with a digit), my-variable (containing hyphens), my variable (containing spaces)



// 5) MATHS EXPRESSIONS:

// . FAMILIER OPERATORS,

var result = (num1 + num2) * (num1 - num2) / (num2);
console.log("Result:", result);

// . UN-FAMILIER OPERATORS,

// PURPOSE:   The % (modulus) operator gives the remainder of the division operation.
var remainder = num1 % num2;
console.log("Remainder:", remainder);


// 6) POST INCREMENT AND PRE INCREMENT

var no = 7
console.log("Post Increment:", no++); // Prints 7, then increment no to 8
console.log("Pre Increment:", ++no) // Incrememt no to 9, then prints 9


// 7) CONCATENATING TEXT STRINGS

var firstName = "Khizer";
var lastName = "Butt";
var fullName = firstName + " " + lastName;
console.log("fullName:", fullName);


// 8) PROMPTS

var userAge = prompt("Please Enter Your Age");
console.log("User's Age:", userAge);
if(userAge>=18){
    alert("YOU ARE ELIGIBLE");
}
else if (userAge<18) {
    alert("YOU ARE NOT ELIGIBLE");
}


// 9) ODD AND EVEN WITH IF STATEMENT

var number=prompt("Enter a Number To Check Number is Odd or Even");
if(number % 2 == 0){
    alert("The Number is Even!");
}else{
    alert("The Number is odd");
}


// 10) IF  ELSE AND ELSE IF STATEMENT

var  grade = prompt("Enter Your Numerical Grade");
if(grade>=90){
    alert("A+1 GRADE");
    console.log("A+1 GRADE");
}
else if(grade>=80){
    alert("A1 GRADE");
    console.log("A1 GRADE");
}
else if(grade>=70){
    alert("A GRADE");
    console.log("A GRADE");
}
else if(grade>=60){
    alert("B GRADE");
    console.log("B GRADE");
}
else if(grade>=50){
    alert("C GRADE");
    console.log("C GRADE");
}
else if(grade>=40){
    alert("D GRADE");
    console.log("D GRADE");
}
else if(grade<40){
    console.log("FAILED");
}
