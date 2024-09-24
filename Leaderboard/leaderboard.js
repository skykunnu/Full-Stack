let fName=document.getElementById('fName');
let lName=document.getElementById('lName');
let Country=document.getElementById('Country');
let Score=document.getElementById('Score');
let downTable=document.getElementById('DownTable');


function addPlayer(){
  

  if(fName.value || lName.value && Country.value || Score.value){
    let playerRow=document.createElement('tr');


    let fNd=document.createElement('td');
    fNd.innerHTML=fName.value;


    let lNd=document.createElement('td');
    lNd.innerHTML=lName.value;


    let country=document.createElement('td');
    country.innerHTML=Country.value;


    let score=document.createElement('td');
    score.innerHTML=Score.value;
    
    playerRow.append(fNd,lNd,country,score);


    
    let DeleteBtn=document.createElement('button');
    DeleteBtn.innerHTML="D";

    let addFive=document.createElement('button');
    addFive.innerHTML='+5';

    let subFive=document.createElement('button');
    subFive.innerHTML='-5';

    playerRow.append(DeleteBtn,addFive,subFive);



     DeleteBtn.onclick=function(){
       downTable.removeChild(playerRow) // removes playerRow(Child element) from downTable(parent element).
       sortPlayers();
      }



    addFive.onclick=function(){
        score.innerHTML=Number(score.innerHTML)+Number(5);
        sortPlayers();
      }




    subFive.onclick=function(){
        score.innerHTML=Number(score.innerHTML)-Number(5);
        sortPlayers();
      }
    


    downTable.append(playerRow);

    fName.value=""
    lName.value=""
    Country.value=""
    Score.value=""


sortPlayers();

  }
else{
  alert("Please Enter value's of all the fields");
}


}

-

function sortPlayers() {
  let PlayerRow = Array.from(downTable.getElementsByTagName('tr'));
  PlayerRow.sort((A, B) => {
      let scoreA = Number(A.children[3].innerHTML);
      let scoreB = Number(B.children[3].innerHTML);
      return scoreB - scoreA; 
  });
  PlayerRow.forEach(player => downTable.append(player));
}

