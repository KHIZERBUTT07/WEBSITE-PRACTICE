var col1 = [202,203,204,205,206,207,208,209];
var col2 = ["BSCS","BSSE","BSC","BSE","BBA","BS","BSU","BA"];
var col3 = ["KU","IU","NED","JSMU","BU","HU","SSU","IBA"];

var student = document.querySelector(".student");
var department = document.querySelector(".department");
var university = document.querySelector(".university");

var studentlis = ""
var departmentlis = ""
var universitylis = ""

for(i=0; i < col1.length; i++){
    studentlis +=    `<li class = "list${i}">${col1[i]}</li>`; 
    departmentlis += `<li class = "list${i}">${col2[i]}</li>`; 
    universitylis += `<li class = "list${i}">${col3[i]}</li>`; 
}
student.innerHTML = studentlis;
department.innerHTML = departmentlis;
university.innerHTML = universitylis;
