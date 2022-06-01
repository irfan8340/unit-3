
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Avengers&key=[YOUR_API_KEY]
// api key AIzaSyBA8MDUznkf4odt6HWKsaIgxTLCBzlMnN4
// most popular api key https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=20&key=[YOUR_API_KEY]

const api_key = "AIzaSyBA8MDUznkf4odt6HWKsaIgxTLCBzlMnN4"
let container = document.querySelector("#container")

// fetching most popular videos from youtube api.
let popular = async () => {

    try {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=20&key=${api_key}`
        let res = await fetch(url)
        let video = await res.json()
        console.log(video.items);
        showPopular(video.items)
    } catch (error) {
        console.error(error);
    }
}
popular()

// Displaying the popular videos list.
let showPopular = (data) => {

    data.forEach(({ id, snippet: { title, thumbnails } }) => {

        let card = document.createElement("div")

        let img = document.createElement("img")
        img.src = thumbnails.medium.url;

        let h3 = document.createElement("h3");
        h3.innerText = title;

        card.append(img, h3)

        let popularObj = {
            id,
            title,
        }
        card.addEventListener("click", () => {

            playIt2(popularObj)
        })
        container.append(card)
    });

}

// when someone search videos then here fetching data from youtube api.
let search = async () => {

    try {
        let query = document.querySelector("#query").value;
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data.items)
        append(data.items)
    } catch (error) {
        console.log(error)
    }
}

// displaying the search results here.
let append = (data) => {

    container.innerHTML = null;
    data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {

        let card = document.createElement("div")

        // let iframe = document.createElement("iframe");
        // iframe.src = `https://www.youtube.com/embed/${videoId}`;
        // iframe.allow = "fullscreen";
        let img = document.createElement("img")
        img.src = thumbnails.medium.url;

        let h3 = document.createElement("h3");
        h3.innerText = title;

        card.append(img, h3)

        let videoObj = {
            videoId,
            title,
        }
        card.addEventListener("click", () => {

            playIt(videoObj)
        })
        container.append(card)
    });
}

// after clicking on any searched video it will store data in localStorage and redirect to video.html
let playIt = (video) => {

    localStorage.setItem("video", JSON.stringify(video))
    window.location.href = "video.html"
}

// when someone clicks on home page popularVideo it will store data in localstorag and redirect to video.html
// I am using another function because keys are defferent from search results keys.
let playIt2 = (video) => {

    localStorage.setItem("popularVideo", JSON.stringify(video))
    window.location.href = "video.html"
}

/*
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/KQwtMVKSGOs"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; 
   autoplay; 
   clipboard-write; 
   encrypted-media; 
   gyroscope; 
   picture-in-picture" allowfullscreen>
</iframe>
*/