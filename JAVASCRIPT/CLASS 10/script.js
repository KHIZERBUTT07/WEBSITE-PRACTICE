// SPLIT: to convert string into array 
// JOIN: to convert array into string


// SPLIT
// var str = "i'm a student"; 
// var arr = str.split(" ");
// console.log(arr)

//JOIN
// var arr = ["first", "second", "third"];
// var str = arr.join(" "); 
// console.log(str)





// Question
// var para = prompt("ENTER A PARAGRAPH");

// var paraArray = para.split(" ")

// console.log(paraArray)
// console.log(paraArray.length);



// var cities = ["karachi",'islmamabad']
// for(let i = 0; i<=cities.lenght ;i++){
//    console.log(cities) 
// }


var cities = ["karachi",'islamabad',"Quetta","Sialkot","Peshawar"];
var userInput = prompt("Enter city Name");
var isFound = false

for(var i=0; i<=cities.length; i++){
    if(userInput===cities[i]){
        console.log('city found :-' +  userInput);
        isFound = true ;
    }
}


if(isFound === false){
  console.log('Not Found');
}
