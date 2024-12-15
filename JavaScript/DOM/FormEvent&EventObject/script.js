const usernameInput=document.querySelector('#username');
const para=document.querySelector('p')

// usernameInput.addEventListener('click',()=>{
//     console.log('Input clicked')
// })

// usernameInput.addEventListener('dblclick',()=>{
//     console.log('Input dblclicked')
// })

// 

usernameInput.addEventListener('input',(e)=>{
    para.innerText=e.target.value;
})

