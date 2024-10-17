let drag = document.querySelectorAll("#addList li")
let drop = document.querySelector("#deleteList")

drag.forEach((courseItem)=>{
    courseItem.ondragstart = (e)=>{
        const courseId=e.target.id 
        const courseText = e.target.innerText;  // Capture the text
        e.dataTransfer.setData("id", courseId);
        e.dataTransfer.setData("text", courseText);    
    }  
})


drop.ondragover = (e)=>{
   e.preventDefault()
}

drop.ondrop = (e)=>{
    const courseId = e.dataTransfer.getData('id');
    const courseText = e.dataTransfer.getData('text'); 
    const newLI = document.createElement('li');
    newLI.id = courseId;
    newLI.innerText = courseText; 
    drop.appendChild(newLI);


    // to hide the dragged items from add list.
    const draggedItem=document.getElementById(courseId);
    draggedItem.style.display='none';
}
