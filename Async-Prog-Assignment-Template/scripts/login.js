

let userData = JSON.parse(localStorage.getItem("signupData"))
let loginArr = [];

document.querySelector("#form").addEventListener("submit", login)

function login() {
    event.preventDefault()

    let email = form.email.value
    let password = form.password.value
    
    if(userData === null) window.location.href = "signup.html";

    userData.forEach(function(elem){
        if(elem.email === email && elem.password === password){
            window.location.href = "index.html";
        }
        else{
            alert("Wrong credentials")
        }
    })
}