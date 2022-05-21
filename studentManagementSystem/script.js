
let studentArr = JSON.parse(localStorage.getItem("studentInfo")) || [];
document.querySelector("#form").addEventListener("submit", getData)
let web18 = JSON.parse(localStorage.getItem("web18")) || 0;
let web17 = JSON.parse(localStorage.getItem("web17")) || 0;


function Details(name, course, unit, img, batch) {
    this.name = name;
    this.course = course;
    this.unit = unit;
    this.img = img;
    this.batch = batch;
}

function getData() {
    event.preventDefault();

    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let img = form.img.value;
    let batch = form.batch.value;

    let student = new Details(name, course, unit, img, batch)
    studentArr.push(student)
    localStorage.setItem("studentInfo", JSON.stringify(studentArr));

    if (batch === "web18" || batch === "Web18") {
        web18++;
    }
    else if (batch === "web17" || batch === "Web17") {
        web17++;
    }

    document.querySelector("#web17").innerText = `Web17 - ${web17}`;
    document.querySelector("#web18").innerText = `Web18 - ${web18}`;

    localStorage.setItem("web18", JSON.stringify(web18))
    localStorage.setItem("web17", JSON.stringify(web17))

    form.name.value = null;
    form.course.value = null;
    form.unit.value = null;
    form.img.value = null;
    form.batch.value = null;
}


