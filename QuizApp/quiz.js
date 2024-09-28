import {questions} from './questions.js';

let start=document.querySelector('#btnStart');
let Container=document.querySelector('#container');
let Ques=document.querySelector('#ques');
let x=5;

function randomQues(){
    return Math.floor(Math.random()*questions.length);
}

let question=questions[randomQues()];

start.addEventListener('click',displayContainer);


function displayContainer(){
    Container.style.display='block';

    let heading=document.createElement('h3');
    heading.innerHTML=question.q
    let timer=document.createElement('p');
    timer.innerHTML='5';
    let interval=setInterval(()=>{
        if(x<=1){
            clearInterval(interval);
        }
        x--;
        timer.innerHTML=x;

    },1000);

    let opt1=document.createElement('button');
    opt1.innerHTML=question.opt[0]
    let opt2=document.createElement('button');
    opt2.innerHTML=question.opt[1];
    let opt3=document.createElement('button');
    opt3.innerHTML=question.opt[2];
    let opt4=document.createElement('button');
    opt4.innerHTML=question.opt[3];

    
    Ques.append(heading,timer,opt1,opt2,opt3,opt4);
}
