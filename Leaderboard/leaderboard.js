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
    
    DownTable.append(playerRow);
    DownTable.append(fNd);
    DownTable.append(lNd);
    DownTable.append(country);
    DownTable.append(score);
}