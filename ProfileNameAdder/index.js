let addBtn=document.querySelector('#Addbtn');
let ProfileAdd=document.querySelector("#profileAdd");
let cancel=document.querySelector('#cancel_1');
let confirm=document.querySelector('#confirm_1');
let cross1=document.querySelector('#cross_1');
let cross2=document.querySelector('#cross_2');
let Profiles=document.querySelector("#profiles");
let Name=document.querySelector('#EnterName');
let ProfileDel=document.querySelector('#profileDelete');
let Cancel_2=document.querySelector('#cancel_2');
let Confirm_2=document.querySelector('#confirm_2');


addBtn.addEventListener('click',function(){
     ProfileAdd.style.display='block';
    
})

confirm.addEventListener('click',function(){
   
    if(Name.value=="" && typeof(Name.value)!=String){
        alert('Please enter Name properly!')
    }
    
    else{
        let person=document.createElement('button');
        let Span=document.createElement('span');
        let I=document.createElement('i');
        Span.id='cross_3';
        I.classList='fa-regular fa-circle-xmark';
        person.classList='Persons';
        person.innerHTML=Name.value[0];
        person.style.textTransform='capitalize'
        Span.append(I);
        person.append(Span);
        Profiles.append(person);
        ProfileAdd.style.display='None';
        Name.value=""


        Span.addEventListener('click',function(){
            ProfileDel.style.display='block';


            Cancel_2.addEventListener('click',function(){
                ProfileDel.style.display='None';
        
               })
        
               Confirm_2.addEventListener('click',function(){
                ProfileDel.style.display='None';
                Profiles.removeChild(person);
        
               })


       })


      

    }

})

cancel.addEventListener('click',function(){
    ProfileAdd.style.display='None';
    Name.value=""

})

cross1.addEventListener('click',function(){
    ProfileAdd.style.display='None';
    
})

cross2.addEventListener('click',function(){
    ProfileDel.style.display='None';
    
})

