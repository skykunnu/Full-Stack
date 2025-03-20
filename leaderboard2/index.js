const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const country = document.getElementById("Country");
const Score = document.getElementById("score");
const Form = document.querySelector("form");
const PlayerDetails = document.querySelector(".playerDetails");
const data = [];

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  const obj = {};

  obj.Name = fName.value + " " + lName.value;

  obj.country = country.value;

  obj.score = Number(Score.value);

  data.push(obj);

  fName.value = "";
  lName.value = "";
  country.value = "";
  score.value = "";

   createRecordOnScreen(data);
   console.log(data)

});

function createRecordOnScreen(data){
    PlayerDetails.innerHTML='';
    for(let i=0;i<data.length;i++){

        let player=document.createElement('div');

        const Name=document.createElement('p');
        Name.innerHTML=data[i].Name;

        const country=document.createElement('p');
        country.innerHTML=data[i].country;

        const score=document.createElement('p');
        score.innerHTML=data[i].score;

        const deleteBtn=document.createElement('button');
        deleteBtn.innerHTML="delete";
        

        player.append(Name,country,score,deleteBtn);
        PlayerDetails.append(player);
    }
}