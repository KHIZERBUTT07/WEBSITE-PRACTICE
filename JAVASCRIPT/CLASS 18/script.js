


var a = "ABC";

function abc(){
    var ab = a +'DE'
    if(a){
        console.log(a);
        // block scope
        let abcd = a +'DE' +'FGH'  

                  // function ka ander variiable work krega bhaer ni krega

        // functional / local scope
        var abcde = a + 'DE' + 'FGH'
 
    }
console.log(a)
console.log('ab=>',ab)
console.log('abc=>',abcde)
}

abc()

// SWITCH CASE:                only work for strings

var app_status = 'pending'  //, approve , rejected ,review

if(app_status === 'pending'){
    console.log('Your application is Pending')
}
 else if(app_status=== 'approve'){
    console.log('Your application is Approved')
 }
 else if(app_status=== 'rejected'){
    console.log('Your application is Rejected')
 }
 else {
    console.log('Your application is under review')
 }

//  switch is same like this but it is a short method
 
var app_status = 'pending'  //, approve , rejected ,review

switch (app_status){
    case 'pending':
        console.log('Your application is Pending')
        break
    case 'approve':
        console.log('Your application is approved')
        break
    case 'rejected':
        console.log('Your application is rejected')
        break
         
}