let ImgItems=document.querySelector('#imgItems');
let crash=document.querySelector('#CrashAud');
let kick=document.querySelector('#KickAud');
let snare=document.querySelector('#SnareAud');
let tom=document.querySelector('#TomAud');


// ImgItems.addEventListener('click',drumSet)

// function drumSet(e){
//     if(e.target.nodeName==='IMG'){ // It is targeting drum Items Image (ie <img>)
//         playDrumItems(e.target.id); // It is targerting id associated to drum Items Image ex- Crash, Kick, Snare, Tom. 
//     }
// }

// function playDrumItems(drumItem){
//     let audio= new Audio(`${drumItem}.mp3`); // It is way of creating
//     audio.play();
// }





ImgItems.addEventListener('keyup',Instrument);



function Instrument(e){
 if(e.key==='a'){
    crash.play()
 }
 else if(e.key==='s'){
    kick.play()
 }
 else if(e.key==='d'){
    snare.play()
 }
 else if(e.key==='f'){
    tom.play()
 }
}

ImgItems.tabIndex=0; // this helps us to navigate elements via the keyboard key. 
ImgItems.focus();