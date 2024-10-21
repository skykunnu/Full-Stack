let AddList=document.querySelector('.add ul');
let DeleteList=document.querySelector('.delete ul');


AddList.addEventListener('dragstart',(e)=>{
        if(e.target.nodeName==='LI'){
            e.target.style.display='none'
            let DeleteListItem=document.createElement('li');
            DeleteListItem.innerHTML=e.target.innerHTML
            DeleteList.append(DeleteListItem);
        }
    })


    DeleteList.addEventListener('click',(e)=>{
        if(e.target.nodeName==='LI'){
            e.target.style.display='none'
            let AddListItem=document.createElement('li');
            AddListItem.innerHTML=e.target.innerHTML
            AddList.append(AddListItem);
        }
    })