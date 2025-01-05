const green=document.querySelector('.green')
const pink=document.querySelector('.pink')
const blue=document.querySelector('.blue')
const Body=document.body;

// Below we have done event bubbling (ie If we click on any element in the below example, it will execute all the event listener from there till it finds the window object). this simply means that event bubbling occurs from (inside to outside). window object is the last object till the bubbling is executed. 

// This third argument (true) inside the event listner is for event capturing that happens from (outside (last ancestor ) to inside (target element)). if we use stopPropagation on any of the below event listners then from there propogation is immediately stop although the console statements of current(on which the stopPropogation is written) event listner will be executed. 

// by defualt it is false.

// Execution order in (capture phase)
/* The event listners defined with true will execute in the order of window--->document--->body--->Target Element */

// We can stop event bubbling by using event.stopPropagation() by placing it anywhere in the above event listner's.

// How Event Propagation works 

/* Event Propagation occurs in two phases capturing phase and bubbling phase.

1. In Capturing phase
--> The event starts from outermost element in our case (window) and propagates towards the target element in our case let say (blue)
listners added with true as a third arguments are executed in this phase. 


*-> Once the event reaches the target element (blue) listners attached to the target are executed. 
these listners can either in the capturing or bubbling phase. 

2. In Bubbling phase
--> After reaching the target, the event propogates back up to the outermost element (window).
listners without true are executed during this phase. 



What happen when you click on blue 

# during capturing phase

window --> document --> body --> green --> pink (capturing) --> blue (capturing)

# during bubbling phase

window --> document --> body --> green --> pink (capturing) --> blue (capturing) --> blue(bubbling) --> pink(bubbling)


What happen when you click on blue during (e.stopPropagation() on green).

When e.stopPropagation() is called, it halts the event from propagating further. if called during the capturing phase,
it stops the propagation for both the capturing and bubbling phase beyond that point. 

# During capturing phase 

window --> document --> body --> green --> stop 

The event does not reach the target element (blue) for either the capturing or bubbling phase because propagation has been stopped.



*/



pink.addEventListener('click',(e)=>{
    console.log('Pink Event Listner (bubbling)');
})

window.addEventListener('click',(e)=>{
    console.log('Window Event Listner');
},true)

document.addEventListener('click',(e)=>{
    console.log('Document Event Listner');
},true)

Body.addEventListener('click',(e)=>{
    console.log('Body Event Listner');
},true)


green.addEventListener('click',(e)=>{
    console.log('Green Event Listner');
    e.stopPropagation(); // Stops the further propagation after this point. 
    
},true)


pink.addEventListener('click',(e)=>{
    console.log('Pink Event Listner (capturing)');
},true)

blue.addEventListener('click',(e)=>{
    console.log('Blue Event Listner (Capturing)');
},true)

blue.addEventListener('click',(e)=>{

    console.log('Blue Event Listner (Bubbling)');
})



// 




