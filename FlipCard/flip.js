let FlipCard=document.querySelectorAll('.flip-card');
let flipCardInner=document.querySelector('.flip-card-inner')
let flipCardBack=document.querySelector(".flip-card-back");
let RandomImages=[
    { src: 'Audi.jpg' },
    { src: 'Bentley.jpg' },
    { src: 'BMW.png' },
    { src: 'Ferrari.jpg' },
    { src: 'Mercedes.jpg' },
    { src: 'Porsche.jpg' }

]


FlipCard.forEach(flip_Card=>{
    flip_Card.addEventListener('click',function(){
        flipCardBack.innerHTML=""
    let Img=document.createElement('img');
    let randomIndex = Math.floor(Math.random() * RandomImages.length);
    Img.src = RandomImages[randomIndex].src;
    console.log(Img.src)
    flipCardBack.append(Img)
    flipCardInner.style.transform='rotateY(180deg)'
    })
})

