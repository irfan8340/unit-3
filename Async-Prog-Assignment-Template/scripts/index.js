
let movieArr = [
    "https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",
    "https://assetscdn1.paytm.com/images/cinema/Jayeshbhai-Jordaar---705x750-660c01c0-cf7c-11ec-98b3-41c37f260d1c.jpg",
    "https://assetscdn1.paytm.com/images/cinema/KGF-705x750-76008750-b6fd-11ec-9639-8322852eadd4.jpg",
    "https://assetscdn1.paytm.com/images/cinema/RRR-North-705x750-fd78d9c0-693d-11ec-bbcd-5d122dc4018b.jpg",
]

localStorage.setItem("moviesImg", JSON.stringify(movieArr))
let i = 0;

function slideShow() {

    let images = JSON.parse(localStorage.getItem("moviesImg"))
    let container = document.querySelector('#slideshow')

    let img = document.createElement("img")
    img.src = images[0]
    container.append(img)
    i++;

    id = setInterval(function () {

        if (i === images.length) {
            i = 0;
        }

        container.innerHTML = null;
        let url = images[i]
        let img = document.createElement("img")
        img.src = url;
        container.append(img);
        i++;
    }, 3000);
}
slideShow()

// Displaying the movies in movies section
function MovieObj(name, date, img, IMDB) {
    this.name = name;
    this.redate = date;
    this.poster = img;
    this.rating = IMDB;
}

let arr = [];

let movie1 = new MovieObj("Bhool Bhulaiyaa 2", "22 May 2022", "https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg", "Rating 8")
let movie2 = new MovieObj("KGF 2", "20 May 2022", "https://assetscdn1.paytm.com/images/cinema/KGF-705x750-76008750-b6fd-11ec-9639-8322852eadd4.jpg", "Rating 9.5")
let movie3 = new MovieObj("RRR", "20 May 2022", "https://assetscdn1.paytm.com/images/cinema/RRR-North-705x750-fd78d9c0-693d-11ec-bbcd-5d122dc4018b.jpg", "Rating 9")
let movie4 = new MovieObj("Jayeshbhai Jordaar", "20 May 2022", "https://assetscdn1.paytm.com/images/cinema/Jayeshbhai-Jordaar---705x750-660c01c0-cf7c-11ec-98b3-41c37f260d1c.jpg", "Rating 9")
let movie5 = new MovieObj("Runway 34", "20 May 2022", "https://assetscdn1.paytm.com/images/cinema/Runway-705x750-9f569ae0-c22e-11ec-b8f2-c1f4a80a2b4c.jpg", "Rating 7")
let movie6 = new MovieObj("Jurassic World: Dominion", "20 May 2022", "https://assetscdn1.paytm.com/images/cinema/Jurassic-World--Dominion-705x750-fb02f490-cd52-11ec-8d22-2363945d80ef.jpg", "Rating 9.5")
let movie7 = new MovieObj("Jersey", "20 May 2022", "https://assetscdn1.paytm.com/images/cinema/Jersey---705x750-1f99f3d0-63e0-11ec-9f0b-a7d286faf05c.jpg", "Rating 7")
let movie8 = new MovieObj("Spider-Man: No Way Home", "20 May 2022", "https://assetscdn1.paytm.com/images/cinema/Spider-705x750-558e6310-5b32-11ec-88db-fb6cee031940.jpg", "Rating 8")
let movie9 = new MovieObj("The Mystery Of The Dragon Seal", "20 May 2022", "https://assetscdn1.paytm.com/images/cinema/The-Mystery-Of-The-Dragon-Seal-705x750-a71b24a0-d767-11ec-b2b4-b70973efa5a2.jpg", "Rating 7")

arr.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9)
localStorage.setItem("movies", JSON.stringify(arr));

let moviesData = JSON.parse(localStorage.getItem("movies"))
displayMovies(moviesData)

function displayMovies(data) {
    // Making container empty for display sorted array
    document.querySelector("#movies").innerHTML = null;

    data.forEach(function (elem) {
        let card = document.createElement("div");

        let img = document.createElement("img")
        img.src = elem.poster;

        let name = document.createElement("h3")
        name.innerText = elem.name;

        let redate = document.createElement("p")
        redate.innerText = elem.redate;

        let rating = document.createElement("p")
        rating.innerText = elem.rating;

        card.append(img, name, redate, rating)
        document.querySelector("#movies").append(card)
    })
}

document.querySelector("#sort").addEventListener("change", sortList)

function sortList() {

    let selected = document.querySelector("#sort").value

    if (selected === "lh") {
        arr.sort(function (a, b) {
            let A = a.rating.trim().slice(6)
            A = parseFloat(A)

            let B = b.rating.trim().slice(6)
            B = parseFloat(B)

            return A - B;
        })
        displayMovies(arr)
    }

    if (selected === "hl") {
        arr.sort(function (a, b) {
            let A = a.rating.trim().slice(6)
            A = parseFloat(A)

            let B = b.rating.trim().slice(6)
            B = parseFloat(B)
            // console.log(A, B)
            return B - A;
        })
        displayMovies(arr)
    }
}