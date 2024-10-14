let ImagesArr=['Audi.jpg','Bentley.jpg','BMW.png','Ferrari.jpg','Mercedes.jpg','Porsche.jpg']
let flipFrontImage=document.querySelectorAll('.flip-card-front img');
let actualImage=[...ImagesArr, ...ImagesArr];
let tempImagesArr=[];
let flipBackImage=document.querySelectorAll('.flip-card-back');
let openImagesStore=[];
let openImages=0;
let result=document.querySelector("#Result");
let Container=document.querySelector('.container');
let timer=0;


backImage();
startTimer();

flipFrontImage.forEach((flipFront_image)=>{
    flipFront_image.addEventListener('click',()=>{
        openImages++;
        flipFront_image.parentElement.parentElement.classList.add('backSide');
        openImagesStore.push(flipFront_image.parentElement.nextElementSibling.children[0])
        
        
            if(openImages>1){
                if(openImagesStore[0].src===openImagesStore[1].src){
                    openImages=0;
                openImagesStore.length=0;
                
            }
            else{
                setTimeout(()=>{
                openImagesStore.forEach((Img)=>{
                    Img.parentElement.parentElement.classList.remove('backSide');
                })
                openImages=0;
                openImagesStore.length=0;
            },1000)
            }
            
        }
})
})


function startTimer(){
   let interval=setInterval(()=>{
        timer++;
       if(timer===60){
        Container.style.display='none';
        result.style.display='block';
        clearInterval(interval);
       }
       console.log(timer)
    },900)
}





function randomIndex(){
    let RandomIndex=Math.floor(Math.random()*actualImage.length);
    if(tempImagesArr.includes(RandomIndex)) return randomIndex();
    else{
        tempImagesArr.push(RandomIndex);
        return RandomIndex;
    }
}

function backImage(){
    for(let i=0;i<actualImage.length;i++){

        let Img=document.createElement('img');
        Img.src=actualImage[randomIndex()];
        flipBackImage[i].append(Img);
    }
}