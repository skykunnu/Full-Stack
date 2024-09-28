    let Body=document.body;
    let Reset=document.querySelector('#reset');
    let Undo=document.querySelector('#undo');
    let Redo=document.querySelector('#redo');
    let arrUndo=[];
    let arrRedo=[];

    Body.addEventListener('click', function(event) {
      // Below is done to avoid dots to appear on button and its div. 
      // if(event.target.nodeName==="DIV") return 
       if(event.target.nodeName==="DIV") return
       if(event.target.nodeName==="BUTTON") return

      // to make coordinates of dots. 
      let x = event.pageX;
      let y = event.pageY;

      let dot = document.createElement('div');
      dot.className = 'dot';

      dot.style.left = `${x-10}px`; 
      dot.style.top = `${y-10}px`;


      let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      dot.style.backgroundColor = randomColor;

  
      Body.append(dot);
      arrUndo.push(dot);
  
      Undo.disabled=false;
      Reset.disabled=false;
      if(arrUndo.length>0){
        Undo.style.opacity="1"
        Reset.style.opacity='1'

      }
    });

    Reset.addEventListener('click',function(e){
      e.preventDefault();
        arrUndo.forEach((dots)=>{
         Body.removeChild(dots);
    })
      arrUndo=[];
      arrRedo=[];
      Reset.disabled=true;
      Undo.disabled=true;
    })

    Undo.addEventListener('click',function(e){
      e.preventDefault();
      Redo.disabled=false;
      let undoDot=arrUndo.pop();

// Two methods to remove dots - by display: none & by removeChild(). 

      // undoDot.style.display='none';
      Body.removeChild(undoDot);
      arrRedo.push(undoDot);
      Redo.style.opacity="1"
    })

    Redo.addEventListener('click',function(e){
      e.preventDefault();
      let redoDot=arrRedo.pop();

// Two methods to display dots - by display: block & by append().
      // redoDot.style.display='block';
      Body.append(redoDot)
      if(arrRedo.length===0){
        Redo.disabled=true
      }
      arrUndo.push(redoDot)
    })
