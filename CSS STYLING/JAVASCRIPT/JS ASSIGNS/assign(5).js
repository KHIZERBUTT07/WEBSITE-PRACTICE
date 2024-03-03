// JAVASCRIPT 5TH ASSIGNMENT

// Q1)
var num1 = 10
var num2 = 30
for(var i = 1; i<=1; i++){
   console.log(num1 + num2);
   console.log(num1 - num2);
   console.log(num1 * num2);
   console.log(num1 / num2);
}

// Q2)
var Age = 18;
if(Age>=18){
    console.log("You are an adult");
}
else{
    console.log("You are a minor");
}

// Q3)
var fruits = []
var fruitNames = ["apple","bannana","orange","grape","kiwi"]
for(var i = 0; i<fruitNames.length;i++){
    fruits.push(fruitNames[i])
} 
console.log("fruitsname:", fruits)

// Q4)
console.log("fruits:");
for(var i = 0; i<fruits.length;i++){
    console.log(fruits[i])
}
// Q5)
console.log("Pattern printing");
for(var i = 1; i<=5;i++){
    var star = ""
    for(var j = 1; j<=i;j++){
        star +="*"
    }
    console.log(star)
}

// Q6)
var sumOfFirst10 = 0
for(var i = 1; i<=10;i++){
    sumOfFirst10 += i
}
console.log("Sum of the first ten natural numbers:", sumOfFirst10)

// Q7)
var colours = []
var colourNames = ["red","green","blue","yellow","orange"];
for( var i =0;i<colourNames.length;i++){
    colours.push(colourNames[i]);
}
console.log("colours Name:", colours)

// Q8)
console.log("Accessing Array elements:");
for(var i = 0;i<colours.length;i++){
    console.log("Index",i,":",colours[i])
}

// Q9)
var reversedColours = colours.reverse();
console.log("Recersed Colours Array:",reversedColours);