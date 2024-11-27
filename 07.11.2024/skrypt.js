async function getData() {
    const dane = await fetch("https://restcountries.com/v3.1/region/europe");
    const json = await dane.json();
    return json;
}

let bdy = document.querySelector("body")

let h1 = document.createElement("h1")
h1.textContent = "Co ma większą populację?"
bdy.appendChild(h1)

const p1 = document.createElement("h4")
const p2 = document.createElement("h4")

bdy.appendChild(p1)
bdy.appendChild(p2)

let divflex = document.createElement("div")
divflex.classList.add("flex")

bdy.appendChild(divflex)

let div1 = document.createElement("div")
div1.style.width = "400px"
div1.style.height = "500px"
div1.style.backgroundColor = "lightgrey"
div1.style.border = "1px solid black"
div1.style.borderRadius = "12px"
divflex.appendChild(div1)

let div2 = document.createElement("div")
div2.style.width = "400px"
div2.style.height = "500px"
div2.style.backgroundColor = "lightgrey"
div2.style.border = "1px solid black"
div2.style.borderRadius = "12px"
divflex.appendChild(div2)

let h2 = document.createElement("h2")
let h3 = document.createElement("h2")

let btn1 = document.createElement("button")
btn1.style.width = "300px"
btn1.style.height = "100px"
btn1.style.backgroundColor = "#585c59"
btn1.style.color = "white"
btn1.style.fontSize = "120%"
btn1.style.border = "none"

let btn2 = document.createElement("button")
btn2.style.width = "300px"
btn2.style.height = "100px"
btn2.style.backgroundColor = "#585c59"
btn2.style.color = "white"
btn2.style.fontSize = "120%"
btn2.style.border = "none"

const img1 = document.createElement("img");
img1.style.width = "300px";
img1.style.height = "200px";
img1.style.padding = "15px"

const img2 = document.createElement("img");
img2.style.width = "300px";
img2.style.height = "200px";
img2.style.padding = "15px"


const divpkt = document.createElement("div");
divpkt.style.width = "300px";
divpkt.style.height = "100px";
divpkt.style.border = "1px solid black";
divpkt.style.margin = "auto";
divpkt.style.marginTop = "50px";
divpkt.style.backgroundColor = "lightgrey"
bdy.appendChild(divpkt);

let punktpop = 0;
let punktnie = 0;

const pktacja = document.createElement("ul");
pktacja.textContent = "Punktacja";

const popr = document.createElement("li");
popr.textContent = "Poprawne: " + punktpop;

const niepop = document.createElement("li");
niepop.textContent = "Niepoprawne: " + punktnie;

pktacja.appendChild(popr);
pktacja.appendChild(niepop);
divpkt.appendChild(pktacja)


async function losuj1() {
    const data = await getData();

    let rand = Math.floor(Math.random() * data.length);
    let rand2
    do {
        rand2 = Math.floor(Math.random() * data.length);
    } while (rand === rand2)

    div1.innerHTML = "";
    div2.innerHTML = "";

    img1.setAttribute("src", data[rand].flags.png);
    div1.appendChild(img1)

    h3.textContent = data[rand].name.common;
    div1.appendChild(h3)

    btn1.textContent = data[rand].name.common + " ma większą populację";
    div1.appendChild(btn1)

    img2.setAttribute("src", data[rand2].flags.png);
    div2.appendChild(img2)

    h2.textContent = data[rand2].name.common;
    div2.appendChild(h2)

    btn2.textContent = data[rand2].name.common + " ma większą populację";
    div2.appendChild(btn2)

    return [data[rand].population, data[rand2].population, data[rand].name.common, data[rand2].name.common]
}

async function wynik() {
    let pop = await losuj1()

    btn1.removeEventListener("click", btn1.sprawdzanie1)
    btn2.removeEventListener("click", btn2.sprawdzanie2)

    btn1.sprawdzanie1 = () => {
        if (pop[0] > pop[1]) {
            bdy.style.backgroundColor = "green";
            punktpop++
        } else {
            bdy.style.backgroundColor = "red";
            punktnie++
        }
        punkty(pop)
    }

    btn2.sprawdzanie2 = () => {
        if (pop[1] > pop[0]) {
            bdy.style.backgroundColor = "green";
            punktpop++
        } else {
            bdy.style.backgroundColor = "red";
            punktnie++
        }
        punkty(pop)
    }

    btn1.addEventListener("click", btn1.sprawdzanie1);
    btn2.addEventListener("click", btn2.sprawdzanie2);
}

function punkty(pop) {
    popr.textContent = "Poprawne: " + punktpop;
    niepop.textContent = "Niepoprawne: " + punktnie;

    p1.textContent = "Populacja " + pop[2] + " to: " + pop[0];
    p2.textContent = "Populacja " + pop[3] + " to: " + pop[1];

    wynik()
}
wynik()