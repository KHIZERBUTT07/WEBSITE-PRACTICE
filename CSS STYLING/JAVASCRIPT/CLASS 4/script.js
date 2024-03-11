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
// copy elements from desire indexes ////must create new array for this
var a= arr.slice(1,3) // 1sa3 tk remove    //new array m deta h //jitna copy krna ho us 1 index zyada btate issee
// var a= arr.slice(0) // 0 sa last tk copy
console.log(a)


/*
splice:first take 2 arguments first starting and second for removing elements then takes multiples arguments for adding multiples elements*/
arr.splice(0,1,"kb")    // 1) index number 2) konsa elemnt remove krna h 3)kya add krna h
arr.splice(0,2) //means  0 index sa lekr 2 elemnts remove krega 0 or 1 wale ko.
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


// NEW CLASS 9
// ARRAYS ANOTHER METHOD:

var students = ["khizer","khubaiab","saqib","ubaid","ali"];
students[6] = "xyz"; //exchanging on index 6
students[students.length] = "newwords" //adding on last length everytime
// console.log(students[0] = "new") /  //adding or exchanging  through console
// students[10] = "nooo" 
console.log(students);


var students1 = ["khizer","khubaiab","saqib","ubaid","ali"];
var returnValue = students1.pop(); //last sa remove and  update value
console.log(students1)
console.log(returnValue)  // jo remove kkrega wo return bhi hoogi //return deleted value

var returnValue = students1.push(); //last ma add krega and update value 
console.log(students1)
console.log(returnValue)  // last m add krke length dega