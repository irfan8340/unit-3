
// puchased vouchers
let purchaseArr = JSON.parse(localStorage.getItem("purchase")) || [];

// api https://masai-vouchers-api.herokuapp.com/api/vouchers
let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
async function getData() {

    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data[0].vouchers)
        append(data[0].vouchers)
    } catch (error) {
        console.log(error)
    }
}

getData()

let walletBalance = localStorage.getItem("wallet_balance")
document.querySelector("#wallet_balance").innerText = walletBalance; 

function append(data) {

    let container = document.querySelector("#voucher_list")
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

        let btn = document.createElement("button")
        btn.setAttribute("id", "buy_voucher")
        btn.innerText = "Buy"
        btn.addEventListener("click", () => {

            purchase(elem)
        })

        card.append(img, title, price, btn)
        container.append(card)
    });
}

function purchase(elem){

    let price = elem.price
    let wallet = localStorage.getItem("wallet_balance");

    if(price <= +wallet){

        wallet = wallet - price;
        purchaseArr.push(elem)
        localStorage.setItem("purchase", JSON.stringify(purchaseArr))
        document.querySelector("#wallet_balance").innerText = wallet;
        localStorage.setItem("wallet_balance", wallet);
        alert("Hurray! purchase successful")
    }
    else{
        alert("Sorry! insufficient balance")
    }

}