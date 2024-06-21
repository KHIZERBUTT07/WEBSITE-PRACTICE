

var a = "A"
var b = "B"

console.log(a)
console.log(b)

// Async functions
// setTimeout (webapis)
// fetch (web apis)
// promise


//callback

function getUserInfo(callback){
    let user = {
        fullName:"Khizer Butt",
        Class:"XII",
    };
    setTimeout(()=>{
        callback(user)    
    },1000);

}

getUserInfo((data) => {
    console.log("data=>",data)
})