

   let num1 = document.getElementById('num1');
   let num2 = document.getElementById('num2');
   let calculation_result = document.getElementById('calculation_result')

   function calculate(sign = '+'){
    let num1Value = num1.value
    let num2Value = num2.value
    if(sign == '+'){
        calculation_result.innerText = parseInt(num1Value) + parseInt(num2Value)
    }
    if(sign == '-'){
        calculation_result.innerText = parseInt(num1Value) - parseInt(num2Value)
    }
    if(sign == '/'){
        calculation_result.innerText = parseInt(num1Value) / parseInt(num2Value)
    }
    if(sign ==  'x'){
        calculation_result.innerText = parseInt(num1Value) * parseInt(num2Value)
    }
    // if(sign== '%'){
    //     calculation_result.innerText = parseInt(num1Value) + parseInt(num1Value)
    // }

   }
