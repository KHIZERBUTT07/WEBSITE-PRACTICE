// STRING METHODS :
// 1)tolowercase
// 2)toUpperCase


// String Methods:
// 1.toUpperCase() => convert string to Uppercase
// 2.toLowerCase() => convert string to lowercase
// B.indexOf() => tell the position of letter, and if not found return -1
// 5.slice() => to copy string
// 6.charAt() => take the index number and return the letter on that index number
// 7.replace() => take 2 parameters and replace the first one with second one
// 8.trim() => remove extra spaces from start and end
// 4.lastIndexOf() => tell the last position of letter, and if not found return -1







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






// var userText = prompt("Enter your valid paragraph")
// var count = 0
// for(i=0;i<userText.length;i++){
//     if(userText[i] === " "){
//         count++;
//     }   
// }
// console.log("you have used a word " +count+  " times");







//indexOf
console.log(str.indexOf('a'))

// var userInfo = prompt('User info')
// console.log(userInfo.indexOf('  '))

// if (userInfo.indexOf('  ') != -1) {
//     alert('Only single space is allowed')
// }

//last Index Of
console.log(str.lastIndexOf('a'))


// 5.slice()  => to copy string 
var username = 'basit'
console.log(username.charAt(0).toUpperCase() + username.slice(1))
// var firstLetter = username.charAt(0)
// console.log("firstLetter=>", firstLetter)

// firstLetter = firstLetter.toUpperCase()
// console.log("firstLetter UpperCase=>", firstLetter)

// var copyAll = username.slice(1)
// console.log("Copy All=>", copyAll)

// var capitilize = firstLetter + copyAll
// console.log("Capitilize=>", capitilize)

//replace
var string = 'Ubaid is very cute.Ubaid always very loud in the class.'

string = string.replace('Ubaid', 'Obaid')

string = string.replaceAll('Ubaid', 'Obaid')
console.log(string)

//length
var email = '  attari1235@gmail.com  '
console.log("Email Lenght=>", email.length)

//trim
email = email.trim()
console.log("Email Lenght=>", email.length)



//count number of a letters used in string
var string = 'Ubaid is very cute.Ubaid always very loud in the class.'

var count = 0
for (var i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() == 'u') {
        count++
    }
}

console.log("Number of A's are " + count)
