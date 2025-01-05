const usernameInput=document.querySelector('#username');
const para=document.querySelector('p')

const form=document.querySelector('form')

// usernameInput.addEventListener('click',()=>{
//     console.log('Input clicked')
// },{once:true}) // It will only run once after triggered.  

// usernameInput.addEventListener('dblclick',()=>{
//     console.log('Input dblclicked')
// })

// input event-> it will give us that value which we are writing in the input. 

// event -> This is the event object automatically passed to an event handler when an event (like a user typing in a text box) occurs.

// event.target -> The input element that triggered the event. 

// event.target.value -> It is a property of the input element that holds the current value (the text entered by the user). 


// usernameInput.addEventListener('input',(e)=>{
//     para.innerText=e.target.value;  
// })



// change event -> it will occur when we type & click anywhere outside the input. 

// usernameInput.addEventListener('change',(e)=>{
//     para.innerText=e.target.value;  
//     console.log(e.target.value) 
// })


// focus event -> it will give us that value which we are writing in the input (ie focusing). 

// usernameInput.addEventListener('focus',(e)=>{
//     para.innerText=e.target.value;
//     console.log(e.target.value) 
// })

// blur event -> this event fires when an input element loses focus.

// usernameInput.addEventListener('blur',(e)=>{
//     para.innerText=e.target.value; 
//     console.log(e.target.value) 
// })


// difference between change and blur event 

// Both occurs when input loses focus but the change event only occur if the value has changed along with lose focus. 


//-----------------------------------------------------------------------------------------




// submit event-> this event triggers when submit the form. 

form.addEventListener('submit',(e)=>{
    e.preventDefault() // It stops the default behaviour (submit) of form
    console.log(e)
});

