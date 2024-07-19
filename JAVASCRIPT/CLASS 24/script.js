
// CONSTRUCTOR FUNCTION

// 1st letter function ka capital hoga
function Student(name,fatherName,age,attendance,totalClasses){
    this.name = name; //obkect ki property add ki this ka through
    this.fatherName = fatherName;
    this.age = age;
    this.attendance = attendance;

    // this.totalClasses = totalClasses;
}

Student.prototype.totalClasses = 60;

// apna method bnaya
Student.prototype.isStudentPunctual = function (){
    var userAttendance = (this.attendance/this.totalClasses) * 100;
    if(userAttendance >= 90){
        return true;
    }
    else{
        return false;
    }
} ;



var student1 = new Student("khizer","jangbahadur",18,55);
var student2 = new Student("khizer","jangbahadur",18,60);
var student3 = new Student("khizer","jangbahadur",18,10);

console.log("student1=>",student1)
console.log("student1=>",student1.isStudentPunctual())
console.log("student2=>",student2)
console.log("student2=>",student2.isStudentPunctual())
console.log("student3=>",student3)
console.log("student3=>",student3.isStudentPunctual())
