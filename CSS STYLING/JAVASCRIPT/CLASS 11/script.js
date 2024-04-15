// STRING METHODS :
// 1)tolowercase
// 2)toUpperCase

var a = "a";
var A = "A";
// console.log(a== A.toLowerCase());
// console.log(a.toUppercase() === A);



// var cities = ["karachi","lahore","islamabad"];
// var usercity = prompt("Enter your city");
// for(i = 0;i<cities.length;i++){
//     if(usercity.toLowerCase()==cities[i].toLowerCase()){
//         alert("Its in our list")
//         break
//     }
// }




 
//*) STRING LENGTH AND COPY STRINGS :

// var smit = "saylani";
//         // console.log(smit.slice(1));
// console.log(smit[0].toUpperCase() +smit.slice(1));



// var userInput = prompt("Enter your word");
// console.log(userInput[0].toUpperCase() + userInput.slice(1)); 
//                // OR
// alert(userInput[0].toUpperCase() + userInput.slice(1));




// var userText = prompt("Enter your valid paragraph");
// for(i=0;i<userText.length;i++){
//     if(userText.slice(i,i+3) === "and"){
//         alert("and is not a valid word")
//     }
//     else(userText.slice(i,i+1) === "?")
//         alert("You cant use question mark in paragraph")
//     break
// }


var userText = prompt("Enter your valid paragraph")
var count = 0
for(i=0;i<userText.length;i++){
    if(userText[i] === " "){
        count++;
    }   
}
console.log("you have used a word " +count+  " times");
