var score = 0

// Question 1

var answer1 = prompt(" 01) True or False: The sun is a Planet.");
if(answer1.toLowerCase()==="false") { score++;
}

// Question 2

var answer2 = prompt(" 02) True or False: The Earth is Flat.");
if(answer2.toLowerCase()==="false") { score++;}

// Quesrtion 3

var answer3 = prompt(" 03) True or False: Water Boils at 100 degrees Celsius");
if(answer3.toLowerCase()==="true") { score++; }

// Display the Final Score

alert("Your Score Is:" +score);
