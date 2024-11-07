const bdy = document.querySelector("body");

const h1 = document.createElement("h1");
h1.textContent = "Zgadnij stolicę!";
bdy.appendChild(h1);

const div = document.createElement("div");
div.style.width = "400px";
div.style.height = "375px";
div.style.border = "1px solid black";
div.style.backgroundColor = "lightgray";
div.style.textAlign = "center";
div.style.fontFamily = "calibri";
div.style.margin = "auto";
bdy.appendChild(div);

const divpkt = document.createElement("div");
divpkt.style.width = "300px";
divpkt.style.height = "100px";
divpkt.style.border = "1px solid black";
divpkt.style.margin = "auto";
bdy.appendChild(divpkt);

let punktpop = 0;
let punktnie = 0;

const pktacja = document.createElement("ul");
pktacja.textContent = "Punktacja";

const pop = document.createElement("li");
pop.textContent = "Poprawne: " + punktpop;

const niepop = document.createElement("li");
niepop.textContent = "Niepoprawne: " + punktnie;

pktacja.appendChild(pop);
pktacja.appendChild(niepop);
divpkt.appendChild(pktacja);

const img = document.createElement("img");
img.style.width = "400px";
img.style.height = "200px";

const h2 = document.createElement("h2");
h2.style.fontSize = "250%";

const inp = document.createElement("input");
inp.setAttribute("type", "text");
inp.setAttribute("placeholder", "Stolica po angielsku");
inp.setAttribute("id", "inpu");
inp.style.width = "400px";
inp.style.height = "30px";
inp.style.margin = "auto";
bdy.appendChild(inp);

const btn = document.createElement("button");
btn.textContent = "Sprawdź!";
btn.style.width = "400px";
btn.style.height = "30px";
btn.style.margin = "auto";
bdy.appendChild(btn);

let capital = ""; 

async function getData() {
    const dane = await fetch("https://restcountries.com/v3.1/region/europe");
    const json = await dane.json();
    return json;
}

async function kraj() {
    const data = await getData();
    let rand = Math.floor(Math.random() * data.length);
    
    if (data[rand].capital) { 
        if (data[rand].capital[0]) { 
            capital = data[rand].capital[0].toLowerCase(); 
        }
    }
    
    div.innerHTML = "";  
    img.setAttribute("src", data[rand].flags.png);
    div.appendChild(img);

    h2.textContent = data[rand].name.common;
    div.appendChild(h2);
}

function odp() {
    let stolica = inp.value.trim().toLowerCase(); 
    
    if (stolica == capital) {
        punktpop += 1;
        pop.textContent = "Poprawne: " + punktpop;
    } else {
        punktnie += 1;
        niepop.textContent = "Niepoprawne: " + punktnie;
    }

    inp.value = "";  

    if (punktnie == 5) {
        const koniec = document.createElement("h1");
        koniec.textContent = "Przegrałeś! Uzyskałeś 5 niepoprawnych odpowiedzi.";
        
        const reset = document.createElement("button");
        reset.textContent = "Zacznij od nowa";
        reset.style.width = "400px";
        reset.style.height = "30px";
        reset.style.margin = "auto";
        reset.setAttribute("onclick", "window.location.reload()");
        bdy.appendChild(koniec);
        bdy.appendChild(reset);

        btn.disabled = true;  
    } else {
        kraj();  
    }
}

btn.addEventListener("click", odp);
kraj();
