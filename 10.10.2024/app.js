const body = document.querySelector("body")

const div = document.createElement("div")

const button1 = document.createElement("input")
const button2 = document.createElement("input")
const InpKolor = document.createElement("input")
const button3 = document.createElement("input")
const button4 = document.createElement("input")
const inpdiv = document.createElement("input")
const button5 = document.createElement("input")
const inpList = document.createElement("input")
const list = document.createElement("ul")


const br = document.createElement("br")
const br2 = document.createElement("br")




div.style.width = "500px";
div.style.height = "500px";
div.style.border = "1px solid black";
div.style.padding = "30px"

div.setAttribute("id", "super")

InpKolor.setAttribute("type", "color")
inpdiv.setAttribute("type", "text")

button1.setAttribute("type", "button")
button1.setAttribute("onclick", "zielony()")
button1.setAttribute("value", "zielony")

button2.setAttribute("value", "czerwony")
button2.setAttribute("type", "button")
button2.setAttribute("onclick", "czerwony()")

button3.setAttribute("type", "button")
button3.setAttribute("value", "zmień kolor")
button3.setAttribute("onclick", "kolor()")

button4.setAttribute("type", "button")
button4.setAttribute("onclick", "tekst()")
button4.setAttribute("value", "wypisz tekst")

button5.setAttribute("type", "button")
button5.setAttribute("onclick", "lista()")
button5.setAttribute("value", "wypisz na liście")


function lista(){

    const li = document.createElement("li")
    const but = document.createElement("input")
    but.setAttribute("type", "button")
    but.setAttribute("value", "USUŃ")
    but.addEventListener("click", function() {
        list.removeChild(li)
    })
    li.innerHTML = inpList.value;
    list.appendChild(li)
    li.appendChild(but)

}



function tekst(){
    const text = document.createElement("p")
    text.innerHTML = inpdiv.value;
    div.appendChild(text)
}
function zielony() {
    div.style.background = "green"
}
function czerwony() {
    div.style.background = "red"
}

function kolor(){
    div.style.backgroundColor = InpKolor.value
}

body.appendChild(div)

body.appendChild(button1)
body.appendChild(button2)
body.appendChild(br)
body.appendChild(InpKolor)
body.appendChild(button3)
div.appendChild(inpdiv)
div.appendChild(button4)
body.appendChild(br2)
body.appendChild(inpList)
body.appendChild(button5)
body.appendChild(list)

