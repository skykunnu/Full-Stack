let loadMore = document.querySelector(".head button")
let pokemon = document.querySelector("#pokemon")
let Body = document.body
let flipcardfront;
let flipcardinner;
let flipcard;
let imgPoke;
// let type;
let temp = [];
let offset = 0;

//  let URL =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`

document.addEventListener("DOMContentLoaded",loadData)
loadMore.addEventListener("click", loadData);

function loadData() {
    let URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`

    fetch(URL)
        .then((response) => response.json())
        .then((result) => {
            // console.log(result)
            showdata(result.results)
            offset += 20

        })
}

function showdata(data) {
    //  console.log(data)
    data.forEach(item => {
        if (temp.includes(item.name)) {
            return; // Skip if it's a duplicate
        }
        // Add Pokémon name to temp to track already displayed ones
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

function imgurl(url, imgelement,typee) {
    fetch(url)
        .then((response) => response.json())
        .then((result) =>{
            imgelement.src = result.sprites.other.dream_world.front_default
           typee.innerText = result.types[0].type.name
// console.log(result.types[0].type.name);

        console.log(result)
            
        } )
}
