// Prompt user for age:
var age = prompt("Enter Your Age:");

// Prompt user for student status:
var isStudent = prompt("Are You A Student?(Yes OR No)");

// Initialize ticketprice variable:
var ticketprice;

// Check age and student status to determine ticket price:
if(age < 12){
    ticketprice = 5;
}
else if(age >=12 && age <=18){
    if(isStudent === "yes"){
        ticketprice = 8;
    }
    else{
        ticketprice = 10;
    }
}
else{
    ticketprice = 12;
}
// Display the ticketprice using an alert box:
alert("The Ticket Price Is $" + ticketprice);