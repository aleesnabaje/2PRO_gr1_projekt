let bdy = document.querySelector("body")

const h1 = document.createElement("h1")
h1.textContent = "Zgadnij stolice!";

const div = document.createElement("div")
div.style.width = "400px";
div.style.height = "375px";
div.style.border = "1px solid black";
div.style.backgroundColor = "lightgray";
div.style.textAlign = "center";
div.style.fontFamily = "calibri";
div.style.margin = "auto";

const divpkt = document.createElement("div")
divpkt.style.width = "300px";
divpkt.style.height = "100px";
divpkt.style.border = "1px solid black"
divpkt.style.margin = "auto"

let punktpop = 0
let punktnie = -1

let pktacja = document.createElement("ul")
pktacja.textContent = "Punktacja";

let pop = document.createElement("li")
pop.textContent = "Poprawne: "+punktpop;

let niepop = document.createElement("li")


divpkt.appendChild(pktacja)

async function getData(){
    const dane = await fetch("https://restcountries.com/v3.1/region/europe")
    const json = await dane.json()

    console.log(json);

    return json
}
const img = document.createElement("img")
let h2 = document.createElement("h2")

let inp = document.createElement("input")
inp.setAttribute("type", "text")
inp.setAttribute("placeholder","Stolica po angielsku")
inp.setAttribute("id","inpu")
inp.style.width = "400px";
inp.style.height = "30px";
inp.style.margin = "auto";

let btn = document.createElement("button")
btn.textContent = "Sprawdź!"
btn.style.width = "400px";
btn.style.height = "30px";
btn.style.margin = "auto";

async function kraje(){
    const data = await getData()
    let rand = Math.floor(Math.random()*53)
    console.log(data[rand].capital);
    const capital = data[rand].capital
        img.setAttribute("src", data[rand].flags.png)
        img.style.width = "400px";
        img.style.height = "200px";
        div.appendChild(img)

        h2.textContent = data[rand].name.common;
        h2.style.fontSize = "250%";
        div.appendChild(h2)

        return capital
        
}
async function a(){
    const data = await kraje()
    console.log(data[0]);
    let stolica = document.getElementById("inpu").value
    if(stolica == data[0]){
            
        punktpop = punktpop+1
        pop.textContent = "Poprawne: "+punktpop;
        console.log(punktpop);
    }
    else{
        punktnie = punktnie+1
        niepop.textContent = "Niepoprawne: "+punktnie;
    }
    if(punktnie==5)
    {
        let koniec = document.createElement("h1")
        let reset = document.createElement("button")
        reset.textContent = "Zacznij od nowa";
        reset.style.width = "400px";
        reset.style.height = "30px";
        reset.style.margin = "auto";
        reset.setAttribute("onclick","window.location.reload()")
        koniec.textContent = "Przegrałeś! Uzyskałeś 5 niepoprawnych odpowiedzi";
        bdy.appendChild(koniec)
        bdy.appendChild(reset)

    }

    
}

        bdy.appendChild(inp)



        btn.addEventListener("click",function (){
            kraje()
            a()
        })
        
        
        bdy.appendChild(btn)
        pktacja.appendChild(pop)
        pktacja.appendChild(niepop)
        bdy.appendChild(divpkt)
        



kraje()





bdy.appendChild(h1)
bdy.appendChild(div)
