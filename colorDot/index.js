    let Body=document.body;
    let Reset=document.querySelector('#reset');
    let Undo=document.querySelector('#undo');
    let Redo=document.querySelector('#redo');
    let arrUndo=[];
    let arrRedo=[];

    Body.addEventListener('click', function(event) {
      // Below is done to avoid dots to appear on button and its div.
      // whatever values goes inside event.target.nodeName should be in capital letters.  
       if(event.target.nodeName==="DIV" || event.target.nodeName==='BUTTON') return
    

      // Way to make coordinates of dots in js. 
      let xCoordinate = event.pageX;
      let yCoordinate = event.pageY;

      let dot = document.createElement('div');
      dot.className = 'dot';

      // way to style coordinate of dots in js.
      dot.style.top = `${yCoordinate-10}px`;
      dot.style.left = `${xCoordinate-10}px`; 


      let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      dot.style.backgroundColor = randomColor;

  
      Body.append(dot);
      // pushing every dot to arrUndo. 
      arrUndo.push(dot);
  
      Undo.disabled=false;
      Reset.disabled=false;


    });




    //  Reset function 

    Reset.addEventListener('click',function(e){
      e.preventDefault();
      // below forEach is done to remove all dots from screen as soon as we click reset button.
        arrUndo.forEach((dots)=>{
         Body.removeChild(dots);
    })
    // both undo and redo array will be empty.
      arrUndo=[];
      arrRedo=[]; 
      Reset.disabled=true;
      Undo.disabled=true;
    })


    //  Undo function 

    Undo.addEventListener('click',function(e){
      e.preventDefault();
      Redo.disabled=false;
      let undoDot=arrUndo.pop();
      Body.removeChild(undoDot);
      arrRedo.push(undoDot);
    })


    // Redo function 

    Redo.addEventListener('click',function(e){
      e.preventDefault();
      let redoDot=arrRedo.pop();
      Body.append(redoDot)
      // As soon as redo array gets empty disabled the redo button.
      if(arrRedo.length===0){
        Redo.disabled=true
      }
      arrUndo.push(redoDot)
    })
