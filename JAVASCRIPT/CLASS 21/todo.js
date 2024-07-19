

// RelationShips:


// var parent = document.getElementById('parent');
// var child = document.getElementById('child2');


// console.log("parent=>",parent.children)
// console.log("parent with junk artifects",parent.childNodes) //better to use parent.children not this.


// console.log("child2=>", child2)
// console.log("child2 parent=>", child2.parentElement)
// console.log("child2 parent=>", child2.parentNode)   //same as parentElemnt.
// console.log("child2 parent=>", child2.parentElement.parentElement)
// console.log("child2 parent=>", child2.parentElement.parentElement.parentElement)


// console.log("child1 ha previousSibling=>", child2.previousElementSibling)
// console.log("child3 ha nextSibling=>", child2.nextElementSibling)


// TOdo List

var todo_input = document.getElementById('todo_input');
var add_todo_btn = document.getElementById('add_todo_btn');
var delete_all_todo_btn = document.getElementById('delete_all_todo_btn');
var todo_list = document.getElementById('todo_list');

add_todo_btn.addEventListener('click',function(){
    if(!todo_input.value) return alert("Add something in Todo List")
    var list_item =`<li>
<span>${todo_input.value}</span>
<button class="edit_btn" onclick="editFun(this)">edit</button>
<button class="del_btn" onclick="deleteFun(this)">del</button>
</li>`
    todo_list.innerHTML += list_item
    todo_input.value = ''
})


function editFun(element){
    // console.log("edit=>",element.parentElement)
    // console.log("edit=>",element.previousElementSibling.innerText)

    var previousValue = element.previousElementSibling.innerText

    var updatedValue = prompt("Edit Value",previousValue)

    element.previousElementSibling.innerText = updatedValue
}

function deleteFun(element){
    // console.log("delete=>",element.parentElement)
    element.parentElement.remove()

}

