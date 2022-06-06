

let form = document.querySelector("#form")
form.addEventListener("submit", getData)

function User(name, email, address, amount) {

    this.name = name;
    this.email = email;
    this.address = address;
    this.amount = amount;
}

function getData() {
    event.preventDefault()

    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let address = document.querySelector("#address").value
    let amount = document.querySelector("#amount").value

    let user = new User(name, email, address, amount)
    localStorage.setItem("wallet_balance", amount)
    localStorage.setItem("user", JSON.stringify(user))

    document.querySelector("#name").value = null;
    document.querySelector("#email").value = null;
    document.querySelector("#address").value = null;
    document.querySelector("#amount").value = null;
}
