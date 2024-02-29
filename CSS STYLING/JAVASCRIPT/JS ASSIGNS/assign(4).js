// JAVASCRIPT ASSIGNMENT 4

// Q1)
for( var i = 1; i <=5; i++){
    console.log(i);

}

// Q2)
var sum = 0;
for( var i = 1; i <=10; i++){
sum += i;
console.log("SUM:",sum);
}

// Q3)
for(var i = 10; i>=1; i--){
    console.log(i);
}

// Q4)
var num = 5;
console.log(`Multiplication Table for ${num}:`);        /* brackets m backticks imp */
for( var i = 1; i<=10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

// Q6)
var star = "*";
for(var i = 1; i<=5; i++){
    // star +='*';   if we put this before console so, we dont need to put variable name before thats y i put this after console.
    console.log(star);
    star +='*';
}

// Q6)

// For Loop:
/* for loop in javascript is used to repeat a  block of code multiple times,making it easier to perform repetitive tasks or iterate over collections of data. It has for steps which are as follows:
   1.Initialization
   2.Condition
   3.Satatement
   4.Updation      */