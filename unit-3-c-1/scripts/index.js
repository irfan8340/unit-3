//store the products array in localstorage as "products"


let productsArr = JSON.parse(localStorage.getItem("products")) || [];
document.querySelector("#products").addEventListener("submit", addProducts)
document.querySelector("#show_products").addEventListener("click", function(){
    window.location.href = "inventory.html";
})

//  creating constructor function to construct object
function ProductsObj(type, desc, price, image){
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;
}

// this function will take data from user and store in localstorage with key products.
function addProducts(){
    event.preventDefault()

    let form = document.querySelector("#products")
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let products = new ProductsObj(type, desc, price, image)
    productsArr.push(products)
    localStorage.setItem("products", JSON.stringify(productsArr))

    document.querySelector("#type").value = null;
    document.querySelector("#desc").value = null;
    document.querySelector("#price").value = null;
    document.querySelector("#image").value = null;
}