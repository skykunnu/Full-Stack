let fName=document.getElementById('fName');
let lName=document.getElementById('lName');
let Country=document.getElementById('Country');
let Score=document.getElementById('Score');
let downTable=document.getElementById('DownTable');


function addPlayer(){
  

  if(fName.value!=="" && lName.value!=="" && Country.value!=="" && Score.value!==""){

    let playerRow=document.createElement('tr');


    let row_first_Name=document.createElement('td');
    row_first_Name.innerHTML=fName.value;


    let row_last_Name=document.createElement('td');
    row_last_Name.innerHTML=lName.value;


    let row_country=document.createElement('td');
    row_country.innerHTML=Country.value;


    let row_score=document.createElement('td');
    row_score.innerHTML=Score.value;
    
    
    let row_DeleteBtn=document.createElement('button');
    row_DeleteBtn.innerHTML="D";

    let row_addFive=document.createElement('button');
    row_addFive.innerHTML='+5';

    let row_subFive=document.createElement('button');
    row_subFive.innerHTML='-5';

    playerRow.append(row_first_Name,row_last_Name,row_country,row_score,row_DeleteBtn,row_addFive,row_subFive);




        row_DeleteBtn.addEventListener('click',function(){
          downTable.removeChild(playerRow)
          sortPlayers();
        })

          
        row_addFive.addEventListener('click',function(){
          row_score.innerHTML=Number(row_score.innerHTML)+Number(5);
          sortPlayers();
        })
   

        row_subFive.addEventListener('click',function(){
          row_score.innerHTML=Number(row_score.innerHTML)+Number(5);
          sortPlayers(); 
       })
    


    downTable.append(playerRow);

   
  clearInput();

  sortPlayers();

  }


else{
  alert("Please Enter value's of all the fields");
}


}


function clearInput(){
  fName.value=""
  lName.value=""
  Country.value=""
  Score.value=""
}

function sortPlayers() {
  let PlayerRow = Array.from(downTable.getElementsByTagName('tr'));
  PlayerRow.sort((playerA, playerB) => {
      let playerScoreA = Number(playerA.children[3].innerHTML);
      let playerScoreB = Number(playerB.children[3].innerHTML);
      
      return playerScoreB - playerScoreA; 
  });
  PlayerRow.forEach(player => downTable.append(player));
}








