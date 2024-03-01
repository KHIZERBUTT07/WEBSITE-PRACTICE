// DATA TYPES:
/*
1. string "abc"
2. boolean "trueorflse"
3. number "232555"
*/

// Array:
var arr = [10.20,"paen",35,78,10>20]
console.log(arr);

// METHOD CALL

// remove elements
arr.pop()  //remove element from last index
arr.shift()  //remove element from first index

// add elements

arr.push("paizan"); //add elements on last index
arr.unshift() //add elements on first index

// accessing properties
console.log(arr.length)

console.log(arr);


// slice:
// copy elements from desire indexes
var a= arr.slice(1,3) // 1sa3 tk remove
// var a= arr.slice(0) // 0 sa last tk copy
console.log(a)


/*
splice:first take 2 arguments first starting and second for removing elements then takes multiples arguments for adding multiples elements*/

arr.splice(1,1) //1sa1 tk remove  
arr.splice(3,3,'khizer') //3 remove kia aur khizer add kia
/*
arr.splice(3,0,'khizer') //just add
arr.splice(3,1,'khizer') //just remove
arr.splice(2,3,'khizer') //remove multiple 
arr.splice(2,0,'khizer','false') //add multiples
arr.splice(1,2,'khizer','false') //remove and add multiples
*/

// reading elements from desired indexes
// var[2]