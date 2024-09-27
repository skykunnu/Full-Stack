let addBtn=document.querySelector('#Addbtn');
let ProfileAdd=document.querySelector("#profileAdd");
let cancel=document.querySelector('#cancel_1');
let confirm=document.querySelector('#confirm_1');
let cross1=document.querySelector('#cross_1');
let Profiles=document.querySelector("#profiles");
let Name=document.querySelector('#EnterName');


addBtn.addEventListener('click',function(){
     ProfileAdd.style.display='block';
    
})

confirm.addEventListener('click',function(){
   
    if(Name.value=="" || typeof(Name.value)!=String){
        alert('Please enter Name properly!')
    }
    
    else{
        let person=document.createElement('button');
        person.classList='Persons';
        person.innerHTML=Name.value[0];
        person.style.textTransform='capitalize'
        Profiles.append(person)
        ProfileAdd.style.display='None';
        Name.value=""
    }

})

cancel.addEventListener('click',function(){
    ProfileAdd.style.display='None';
    Name.value=""

})

cross1.addEventListener('click',function(){
    ProfileAdd.style.display='None';
    
})