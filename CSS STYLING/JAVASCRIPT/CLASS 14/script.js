
var result_num = document.getElementById('rsult_num');
var user_num = document.getElementById('user_num');
var result_box = document.getElementById('result_box');

function checkNumber(usernumber){

    var RandomNumber = math.ceil(math.random() * 6)
    user_num.innerTextc = usernumber
    result_num.innerText = RandomNumber
    if(usernumber == RandomNumber){
        result_box.innerText  = "Congrats!,You Won"
        result_box.style.color = 'green'
    }
        else{
            result_box.innerText = "Sorry!,You Lose"
            result_box.style.color = 'red'
        }
    
}