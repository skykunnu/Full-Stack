let loadMore = document.querySelector(".head button")
let pokemon = document.querySelector("#pokemon")
let Body = document.body
let flipcardfront;
let flipcardinner;
let flipcard;
let imgPoke;
let temp = [];
let offset = 0;


document.addEventListener("DOMContentLoaded",loadData)
loadMore.addEventListener("click", loadData);

function loadData() {
    let URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`

    fetch(URL)
        .then((response) => response.json())
        .then((result) => {
        
            showdata(result.results)
            offset += 20

        })
}

function showdata(data) {
    
    data.forEach(item => {
        if (temp.includes(item.name)) {
            return; 
        }
        
        temp.push(item.name);


        flipcard = document.createElement("div")
        flipcard.classList.add("flip-card")

        flipcardinner = document.createElement("div")
        flipcardinner.classList.add("flip-card-inner")

        flipcardfront = document.createElement("div")
        flipcardfront.classList.add("flip-card-front")
        imgPoke = document.createElement("img")

        let fName = document.createElement("h1")
        fName.innerText = item.name
        let type = document.createElement("h3")
        

        flipcardfront.append(imgPoke, fName,type)
        flipcardinner.append(flipcardfront)
        flipcard.append(flipcardinner)
        pokemon.append(flipcard)

        imgurl(item.url, imgPoke,type)
    });
}

function imgurl(url, Img_element,Type) {
    fetch(url)
        .then((response) => response.json())
        .then((result) =>{
            Img_element.src = result.sprites.other.dream_world.front_default
           Type.innerText = result.types[0].type.name


        console.log(result)
            
        } )
}
