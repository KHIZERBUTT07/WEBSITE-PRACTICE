


function Calculate(){

var a = parseInt(document.getElementById('bookone').value);
var b = parseInt(document.getElementById('booktwo').value);
var c = parseInt(document.getElementById('bookthree').value);
var d = parseInt(document.getElementById('bookfour').value);
var e = parseInt(document.getElementById('bookfive').value);
// var e = parseInt(document.getElementById('booksix').value);

var student = document.getElementById('student-name').value;

    if(a >= 101 || a<0){
        alert("Please Enter Valid Marks")
    }
    else if(b >= 101 || b<0){
        alert("Please Enter Valid Marks")
    }
    else if(c >= 101 || c<0){
        alert("Please Enter Valid Marks")
    }
    else if(d >= 101 || d<0){
        alert("Please Enter Valid Marks")
    }
    else if(e >= 101 || e<0){
        alert("Please Enter Valid Marks")
    }
    else if(student >=1 || student<0){
        alert("Please Enter Valid Name")
    }
    else{
        var obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML = obtain;

        var percent = obtain/550*100;
        document.getElementById("percent").innerHTML = percent;

        var stdName = student
        document.getElementById("stdName").innerText = student;

        if(a>40 && b>40 && c>40 && d>40 && e>40 ){
            document.getElementById("remarks").innerHTML = "<span style='color:#292'>Pass</span>";
        }
        else{
            document.getElementById("remarks").innerHTML = "<span style='color:red'>Fail</span>";
        }
       if(percent>=90){
        document.getElementById("grade").innerText = "A1" 
       }
     else  if(percent>=80){
        document.getElementById("grade").innerText = "A+" 
       }
     else  if(percent>=70){
        document.getElementById("grade").innerText = "A" 
       }
     else  if(percent>=60){
        document.getElementById("grade").innerText = "B" 
       }
     else  if(percent>=50){
        document.getElementById("grade").innerText = "C" 
       }
     else  if(percent>=40){
        document.getElementById("grade").innerText = "D" 
       }
     else  if(percent>=30){
        document.getElementById("grade").innerText = "E" 
       }
     else{
        document.getElementById("grade").innerText = "F" 
       }
    }
    return false;
    
}