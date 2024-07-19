

async function getData(){
    console.log("login");
    let api = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log("api=>",api);
    let data = await api.json();
    console.log("data=>",data);
    return data;

// let data = await api.json()
}
async function showWelcomeNote(){
    let userData = await getData();
    console.log("userData",userData);
}
showWelcomeNote()