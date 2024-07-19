
var result_num = document.getElementById('result_num');
var user_num = document.getElementById('user_num');
var result_box = document.getElementById('result_box');

var chance = document.getElementById('chances_left');
var chanceleft = document.getElementById('khizer')
var main = document.querySelector('main');
var count = 10
// let player1 = 0;
// let player2 = 0;
// let maxTurns = 10;


function checkNumber(usernumber){
    var turns = count-1;
    chanceleft.innerText = turns;


    var RandomNumber = Math.ceil(Math.random() * 6)
    // user_num.innerText = usernumber
    result_num.innerText = RandomNumber
    // count--
    if(usernumber == RandomNumber){
        result_box.innerText  = "Congrats!,You Won"
        result_box.style.color = 'green'    
    }
        else{
            result_box.innerText = "Sorry!,You Lose"
            result_box.style.color = 'red'
        }
        // if(player1==3 ||player2===3 ){
        //     alert("you won");
        // }
        // else if(player1+player2 === maxTurns){
        //     alert("OOPs!you could not complete in 10 turns,You lose!")
        // }

        // var forwin = 3

        // if(usernumber === RandomNumber ){
    //         alert("you won")
    //     }
    //      if(chanceleft.innerText <=0)
    //     main.classList.add('none');
    // alert("you lose")
    
}