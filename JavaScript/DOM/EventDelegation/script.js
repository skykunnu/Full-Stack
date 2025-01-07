/* 
Event Delegation -> It is a technique in JS where you add a single event listner to a parent element instead of adding
multiple event listeners to individual child elements. this technique leverages the concept of event bubbling 
where an event on child element bubbles up to its ancestors. 

# Purpose 

1. Efficiency -> This reduce memory usage and improve performance 

2. Dynamic Elements -> It works even if child elements are added or deleted dynamically. 

*/


const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})