
document.querySelector("form").addEventListener("submit", signupInfo)

let signupArr = JSON.parse(localStorage.getItem("signupData")) || []
function signupInfo(){
    event.preventDefault()

    let userData = {
        name : form.name.value,
        contact : form.contact.value,
        email : form.email.value,
        password : form.password.value
    }

    signupArr.push(userData);
    localStorage.setItem("signupData", JSON.stringify(signupArr))
    alert("Signup successful")
    window.location.href = "login.html"
}