// AND OPERATOR (&&):

var value = 10
var isvalue = value >=7 && value <=10;    //left sa chk hoga  //left and right sa true hui to true hogs //left sa false hui to false hoga 
console.log(isvalue);


// OR OPERATOR (||):

var value = 10
var isvalue = value >=7 || value <=10;   // dono ma sa ek bhi sahi hui to true hojaega
console.log(isvalue);


// NEW CLASS 9
// ARRAYS

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