let users = [];

let result = document.getElementById('result');
let button = document.querySelectorAll("button");
let output = 0;

for(let item of button){
    item.addEventListener("click",function() {
        let firstNum = document.getElementById("firstNum").value;
        let secondNum = document.getElementById("secondNum").value;

        calculate(firstNum, secondNum, this.innerHTML)
    })
}

function calculate(firstnum, secondnum, operator) {
    result.innerHTML = eval(`${firstnum}${operator}${secondnum}`);
}


//Login sample
loadLocal();
let btn_save = document.getElementById("btn_save");
let btn_login = document.getElementById("btn_login");

btn_save.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    addUser(username, password);
})

btn_login.addEventListener("click", () => {
    let username = document.getElementById("username1").value;
    let password = document.getElementById("password1").value;
    login(username, password);
});

function addUser(username, password){
    let user = {
        username: username,
        password: password
    }
    users.push(user);
    saveLocalStorage();
}

function login(username, password){
    let isExisting = users.find(m => m.username == username && m.password == password);

    if(isExisting) alert("hey");
    else alert("shit");
}

function saveLocalStorage() {
    if (localStorage.getItem("users") === null) 
        localStorage.setItem('users', "");
    
    let _user = JSON.stringify(users);
    localStorage.setItem('users', _user);
}

function loadLocal() {
    let localData = localStorage.getItem("users");

    if(localData)
        users = JSON.parse(localData);
}