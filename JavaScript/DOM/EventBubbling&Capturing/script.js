const green=document.querySelector('.green')
const pink=document.querySelector('.pink')
const blue=document.querySelector('.blue')

// Below we have done event bubbling (ie If we click on any element in the below example, it will execute all the event listener from there till it finds the window object). this simply means that event bubbling occurs from (inside to outside). window object is the last object till the bubbling is executed. 

// this third argument (true) inside the event listner is for event capturing that happens from (outside to inside). if we use stopPropagation on any of the below event listners then from there to  last child the propogation will stop although the console statements of current(on which the stopPropogation is written) event listner will be executed. 

window.addEventListener('click',(e)=>{
    console.log('Window Event Listner');
},true)

document.addEventListener('click',(e)=>{
    console.log('Document Event Listner');
},true)

document.body.addEventListener('click',(e)=>{
    console.log('Body Event Listner');
},true)


green.addEventListener('click',(e)=>{
    console.log('Green Event Listner');
},true)


pink.addEventListener('click',(e)=>{
    console.log('Pink Event Listner');
},true)

blue.addEventListener('click',(e)=>{
    // e.stopPropagation(); // it will stop propogating further/above event listners. 
    console.log('Blue Event Listner');
},true)


// We can stop event bubbling by using event.stopPropagation() by placing it anywhere in the above event listners.



