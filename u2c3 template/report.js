// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks


document.querySelector("form").addEventListener("submit", myFunction)

function myFunction() {
    event.preventDefault()
    var img = document.querySelector("#image").value
    var name = document.querySelector("#name").value
    var batch = document.querySelector("#batch").value
    var dsa = document.querySelector("#dsa").value
    var skillathon = document.querySelector("#cs").value
    var coding = document.querySelector("#coding").value

    console.log(img, name, batch, dsa, skillathon, coding)

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
        var studentImg = document.createElement("img")
        studentImg.setAttribute("src", img)
        td1.append(studentImg);

    var td2 = document.createElement("td");
        td2.innerText = name;

    var td3 = document.createElement("td");
        td3.innerText = batch;

    var td4 = document.createElement("td");
        td4.innerText = dsa;

    var td5 = document.createElement("td");
        td5.innerText = skillathon;

    var td6 = document.createElement("td");
        td6.innerText = coding;

    var td7 = document.createElement("td");
        var obtainMarks = Number(dsa) + Number(skillathon) + Number(coding);
        var percentage = (obtainMarks/30)*100;
        td7.innerText = percentage;

    var td8 = document.createElement("td");
        if(percentage > 50)
        {
            td8.innerText = "Regular"
            td8.style.backgroundColor = "green"
        }
        else
        {
            td8.innerText = "Async"
            td8.style.backgroundColor = "red"
        }
    var td9 = document.createElement("td");
        td9.style.backgroundColor = "red"
        td9.innerText = "Delete"
        td9.addEventListener("click", deleteRow)

    tr.append(td1, td2,td3,td4,td5,td6,td7,td8,td9)
    document.querySelector("tbody").append(tr);
}

function deleteRow(){

    event.target.parentNode.remove();
    event.parentNode.innerHtml = "";
}

