var students = [
    {name:"khizer"},
    {name:"khubaib"},
    {name:"obaid"},
    {name:"ubaid"},
];

// instead of for loop we use this:

// students.forEach(function(data, index){
//     console.log("index=>",index,"Data=>",data)
//     // console.log(data.name); 
// });

// students[0].name = "Khizer Butt";

// students.splice(3,1);
// console.log(students);

var list = document.getElementById("list");

function renderData(){
    list.innerHTML = "";
    students.forEach(function (data, index) {
        var element = `<li id=${index}> <span>${data.name}</span> <button onclick="editObj(this)">Edit</button> <button onclick="deleteObj(this)">Delete</button></li>`;
        list.innerHTML += element;
    });
}
renderData();

function editObj(element){
    var newName = prompt("Enter new name:", students[element.parentElement.id].name);
    if (newName) {
        students[element.parentElement.id].name = newName;
        renderData();
    }
}

function deleteObj(element){
    students.splice(element.parentElement.id, 1);
    renderData();
}













// dont need to use this
// for(var i=0;i<students.length;i++){
//     console.log(students[i].name);
// } 