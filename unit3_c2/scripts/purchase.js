

let balance = localStorage.getItem("wallet_balance")
document.querySelector("#balance").innerText = balance;

let purchaseArr = JSON.parse(localStorage.getItem("purchase"))
append(purchaseArr)

function append(data) {

    let container = document.querySelector("#purchased_vouchers")
    container.innerHTML = null;

    data.forEach((elem) => {

        let card = document.createElement("div")
        card.setAttribute("class", "voucher")

        let img = document.createElement("img")
        img.src = elem.image;

        let title = document.createElement("h3")
        title.innerText = elem.name;

        let price = document.createElement("p")
        price.innerText = elem.price;

        card.append(img, title, price)
        container.append(card)
    });
}