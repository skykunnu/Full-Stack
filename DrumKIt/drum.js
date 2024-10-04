let ImgItems=document.querySelector('#imgItems');

ImgItems.addEventListener('click',drumSet);

function drumSet(e){
    if(e.target.nodeName==='IMG'){ // It is targeting drum Items Image (ie <img>)
        playDrumItems(e.target.id); // It is targerting id associated to drum Items Image ex- Crash, Kick, Snare, Tom. 
    }
}

function playDrumItems(drumItem){
    let audio= new Audio(`${drumItem}.mp3`); // It is way of creating
    audio.play();
}
