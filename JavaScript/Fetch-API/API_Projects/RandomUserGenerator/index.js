let btn=document.querySelector('#clickBtn');
let Img=document.querySelector('#image');
let Name=document.querySelector('#name');
let email=document.querySelector('#Email');

const URL="https://randomuser.me/api";

btn.addEventListener('click',getData)

function getData(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((result)=>{
        ShowData(result.results[0]);
    })
}

function ShowData(fetchedData){
Img.src=fetchedData.picture.large;
Name.innerText=`${fetchedData.name.first} ${fetchedData.name.last}`
email.innerText=`${fetchedData.email}`
}