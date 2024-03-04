var names = ["khizer","khubaib","saqib","ubaid"];

// var h1 = document.getElementsByClassName("dom") 
// var h1 = document.getElementById("dom")
// var h1 = document.querySelector("[id]") ;            // it select only one
// var h1 = document.querySelector("#dom") ;            // it select only one
// var h1 = document.querySelector(".class") ;          // it select only one
// var h1 = document.querySelectorAll("[id]") ;          // it select all             // [id]: to select attribut

//  console.log(h1)

 var nameList = document.querySelector(".name-list")
 /*  nameList.innerHTML = `
   <li>${names[1]}</li>
   <li></li>
   <li></li> `;

   console.log(nameList.innerHTML) */

   var lis = ""
   for (var i = 0;i<names.length;i++){
    lis += `<li>${names[i]}</li>\n`
}
nameList.innerHTML = lis;
console.log(nameList.innerHTML)


