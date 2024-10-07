let Input=document.querySelector("#todoInput");
let addbtn=document.querySelector('#AddBtn');
let todoCont=document.querySelector('#todoItems');
let BgColor=[
    {backgroundColor:"#FFEEA9", color:"black"},
    {backgroundColor:"#F9D689", color:"black"},
    {backgroundColor:"#F6E9B2" , color:"black"},
    {backgroundColor:"#FFE0B6" , color:"black"}

];

addbtn.addEventListener('click', Tasks);

function Tasks(){

    if(Input.value===""){
        alert('Please Enter the task !')
    }
    else{
        let para=document.createElement('p');
    let delBtn=document.createElement('span');
    let deli=document.createElement('i')
    let editi=document.createElement('i')
    let editBtn=document.createElement('span');
    let ItemDiv=document.createElement('div');
    let btnDiv=document.createElement('div');
    para.innerHTML=Input.value;
    
    ItemDiv.classList='items'
    btnDiv.classList='btns'
    
    let Colors=BgColor[BGColor()]

    ItemDiv.style.backgroundColor=Colors.backgroundColor;
    ItemDiv.style.color=Colors.color;
    
    
    deli.classList="fa-solid fa-trash";
    editi.classList="fa-solid fa-pencil";
    
    
    editBtn.append(editi);
    delBtn.append(deli);
    btnDiv.append(delBtn,editBtn);
    ItemDiv.append(para,btnDiv);
    todoCont.append(ItemDiv)


    
    Input.value=''

    delBtn.addEventListener('click',function(){
        Delete(ItemDiv);
    });

    editBtn.addEventListener('click',function(){
         edit(para,ItemDiv);
    })
    }

    

}

function Delete(ItemDiv){
    ItemDiv.remove();
    }

 function edit(para,ItemDiv){

   Input.value=para.innerHTML;
   para.innerHTML=""

   addbtn.addEventListener('click',function(){
    para.innerHTML=ItemDiv.replaceWith(Input.value);
   })
 }

function BGColor(){
    return Math.floor(Math.random()*BgColor.length);
}