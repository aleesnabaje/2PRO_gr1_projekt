// const uczen = [{
//     imie: "Igor",
//     nazwisko: "Laskowski",
//     klasa: {
//         nazwa: "2PRO",
//         wychowawca: "Madika Rysiawa"
//     }
// },
// {
//     imie: "Bartłomiej",
//     nazwisko: "Bolanowski",
//     klasa: {
//         nazwa: "2PRO",
//         wychowawca: "Madika Rysiawa"
//     }
// }]

// for(let i = 0; i < uczen.length; i++){

//     if(uczen[i].klasa == "2PRO"){
//     uczen[i].klasa = "1PRO"
//     }
// }

// console.log(uczen);

// console.log(uczen.imie);


let bdy = document.querySelector("body")

async function getData(){
    const dane = await fetch("https://restcountries.com/v3.1/all")
    const json = await dane.json()

    console.log(json);

    return json
}

async function kraje(){
    const data = await getData()
    for (let i = 0; i<data.length; i++){

      

        const div = document.createElement("div")
        div.style.width = "200px";
        div.style.height = "400px";
        div.style.border = "1px solid black";
        div.style.backgroundColor = "lightgray";
        div.style.textAlign = "center";
        div.style.fontFamily = "calibri";
        div.classList.add("flip-in-hor-bottom")
        bdy.appendChild(div)

        const img = document.createElement("img")
        img.setAttribute("src", data[i].flags.png)
        img.style.width = "200px";
        img.style.height = "120px"
        div.appendChild(img)

        const h1 = document.createElement("h1")
        h1.innerHTML = data[i].name.common;
        div.appendChild(h1)

        const lista = document.createElement("ul")

        const cap = document.createElement("li")
        cap.innerHTML ="Capital: "+ data[i].capital

        const pop = document.createElement("li")
        pop.innerHTML ="Population: "+ data[i].population

        const cont = document.createElement("li")
        cont.innerHTML ="Continent: "+ data[i].continents[0]


        div.appendChild(lista)
        lista.appendChild(cap)
        lista.appendChild(pop)
        lista.appendChild(cont)
        
    }

    
}

kraje()


