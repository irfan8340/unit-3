

let trashArr = JSON.parse(localStorage.getItem("trash")) || [];
let studentArr = JSON.parse(localStorage.getItem("studentInfo"))
displayData(studentArr)

let web18 = JSON.parse(localStorage.getItem("web18")) || 0;
let web17 = JSON.parse(localStorage.getItem("web17")) || 0;

document.querySelector("#web17").innerText = `Web17 - ${web17}`;
document.querySelector("#web18").innerText = `Web18 - ${web18}`;

function displayData(data) {
    document.querySelector("#container").innerHTML = null;

    data.forEach(function (elem, index) {

        let card = document.createElement("div")
        card.setAttribute("class", "card")

        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = elem.img;

        let name = document.createElement("p")
        name.innerText = `Name : ${elem.name}`;

        let course = document.createElement("p")
        course.innerText = `Course : ${elem.course}`;

        let batch = document.createElement("p")
        batch.innerText = `Batch : ${elem.batch}`;

        let unit = document.createElement("p")
        unit.innerText = `Unit : ${elem.unit}`;

        let remove = document.createElement("button")
        remove.setAttribute("id", "remove")
        remove.innerText = "Remove";
        remove.addEventListener("click", function () {
            del(elem, index)
        })

        div.append(name, course, batch, unit)
        card.append(img, div, remove)
        document.querySelector("#container").append(card)

    })
}

function del(elem, index) {

    studentArr.splice(index, 1)
    localStorage.setItem("studentInfo", JSON.stringify(studentArr))
    displayData(studentArr);

    if (elem.batch === "web18" || elem.batch === "Web18") {
        web18--;
        document.querySelector("#web18").innerText = `Web18 - ${web18}`;
        localStorage.setItem("web18", JSON.stringify(web18));
    }

    if (elem.batch === "web17" || elem.batch === "Web17") {
        web17--;
        document.querySelector("#web17").innerText = `Web17 - ${web17}`;
        localStorage.setItem("web17", JSON.stringify(web17))
    }

    trashArr.push(elem)
    localStorage.setItem("trash", JSON.stringify(trashArr));
}