

let productsArr = JSON.parse(localStorage.getItem("products"))
displayData(productsArr)

// when we click on add more product button it will redirect to index.html page where we again able to add products
document.querySelector("#add_more_product").addEventListener("click", function(){
    window.location.href = "index.html"
})

// displaying the products using this function
function displayData(data){

    document.querySelector("#all_products").innerHTML = null;

    data.forEach(function(elem, index){

        let card = document.createElement("div")

        let image = document.createElement("img")
        image.src = elem.image;

        let desc = document.createElement("p")
        desc.innerText = elem.desc;

        let price = document.createElement("p")
        price.innerText = `₹ ${elem.price}`;

        let type = document.createElement("p")
        type.innerText = elem.type;

        let remove = document.createElement("button")
        remove.innerText = "Remove"
        remove.setAttribute("id", "remove_product")
        remove.addEventListener("click", function(){
            removeProduct(elem, index)
        })

        card.append(image, desc, price, type, remove)
        document.querySelector("#all_products").append(card)
    })
}

// when we click on remove button this function will remove products from page as well as from localstorage 
function removeProduct(elem, index){
    productsArr.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(productsArr))
    displayData(productsArr)
}