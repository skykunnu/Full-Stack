const KEY="0vW7R-guYyZLPWKDlpGNBdf2jw1TS1QuALkltFPLDMk";
const count=15;
const URL=`https://api.unsplash.com/photos/random/?client_id=${KEY}&count=${count}`
const postDiv=document.querySelector('#post');
const loader=document.querySelector('#loader');




let loaded=false; // it is doing throttling in this code. 

async function getPhotos(){
    loader.style.display='block';
    loaded=false;
    const response=await fetch(URL);
    const result=await response.json();
    displayPhoto(result);
}

function displayPhoto(arr){
    const fragments=document.createDocumentFragment();
    arr.forEach((object)=>{
        const anchor=document.createElement('a');
        anchor.href=object.links.self;
    
        const img=document.createElement('img');
        img.src=object.urls.regular;

        anchor.append(img);
        fragments.append(anchor);
    })
    postDiv.append(fragments);
    loader.style.display='none';
    loaded=true;
}

window.addEventListener("scroll",()=>{
    if(window.scrollY+window.innerHeight >= document.body.offsetHeight-100 && loaded){
        getPhotos();
    }
})

getPhotos();