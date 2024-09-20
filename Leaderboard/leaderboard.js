let fName=document.getElementById('fName');
let lName=document.getElementById('lName');
let Country=document.getElementById('Country');
let Score=document.getElementById('Score');


function player(){
    let playerRow=document.createElement('tr');
    let fNd=document.createElement('td');
    fNd.innerHTML=fName.value;
    let lNd=document.createElement('td');
    lNd.innerHTML=lName.value;
    let country=document.createElement('td');
    country.innerHTML=Country.innerHTML;
    let score=document.createElement('td');
    score.innerHTML=Score.value;
    
    playerRow.append(fNd);
    playerRow.append(lNd);
    playerRow.append(country);
    playerRow.append(score);
    
    let DeleteBtn=document.createElement('button');
    DeleteBtn.innerHTML="D";
    playerRow.append(DeleteBtn);

     DeleteBtn.onclick=function(){
       DownTable.removeChild(playerRow)
     }
    let addFive=document.createElement('button');
    addFive.innerHTML='+5';
    playerRow.append(addFive);
    addFive.onclick=function(){
        score.innerHTML=Number(score.innerHTML)+Number(5);
      }
    let subFive=document.createElement('button');
    subFive.innerHTML='-5';
    playerRow.append(subFive);
    subFive.onclick=function(){
        score.innerHTML=Number(score.innerHTML)-Number(5);
      }
    
    DownTable.append(playerRow);
}