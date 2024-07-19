


let outputScreen = document.getElementById("output_screen");

function display(num){
    outputScreen.value += num;

}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid Input")
    }
}
function Clear(){
    outputScreen.value = ""
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}

//                ==============================================================================================                     //


// for maximum input length:

// let input = document.querySelector('input[type="text"]');
// input.addEventListener('input',function(){
//     if(input.value.length > 8){
//         input.value = input.value.slice(0,8)
//     }
// });