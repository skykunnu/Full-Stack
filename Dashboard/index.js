let homeIcon=document.getElementById('Home');
let fileIcon=document.getElementById('File');
let messageIcon=document.getElementById('Messages');
let notification=document.getElementById('Notification');
let locations=document.getElementById('Location');
let innerbox1=document.getElementById('innerbox1');
let innerbox2=document.getElementById('innerbox2');
let innerbox3=document.getElementById('innerbox3');
let innerbox4=document.getElementById('innerbox4');


homeIcon.addEventListener("click",innerBox1)

function innerBox1(){
        innerbox1.style.backgroundColor="#c7cfd9";
        innerbox1.style.color='black';
}

fileIcon.addEventListener("click",innerBox2)

function innerBox2(){
        innerbox1.style.backgroundColor="#123859";
        innerbox1.style.color='white';
        innerbox2.style.backgroundColor="#c7cfd9";
        innerbox2.style.color='black';
}

messageIcon.addEventListener("click",innerBox3)

function innerBox3(){
        innerbox2.style.backgroundColor="#123859";
        innerbox2.style.color='white';
        innerbox3.style.backgroundColor="#c7cfd9";
        innerbox3.style.color='black';
}

notification.addEventListener('click',innerBox4)

function innerBox4(){
        innerbox3.style.backgroundColor="#123859";
        innerbox3.style.color='white';
        innerbox4.style.backgroundColor="$c7cfd9";
        innerbox4.style.color="black";
}

locations.addEventListener('click',innerBox5)

function innerBox5(){
        innerbox4.style.backgroundColor="#123859";
        innerbox4.style.color='white';
}