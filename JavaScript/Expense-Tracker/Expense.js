let AmtNum=document.getElementById('AmtNum');
let total=document.getElementById('Total');
let spent=document.getElementById('Spent');
let remain=document.getElementById('Remain');
let AmtSpent=document.getElementById('AmtSpent');
let downTable=document.getElementById('DownTable')
let item=document.getElementById("items");
let x=0;

function openAmt(){
    total.innerHTML=AmtNum.value;
}


function Amtadd(){
    spent.innerHTML= Number(AmtSpent.value)+Number(spent.innerHTML);
    remain.innerHTML=Number(total.innerHTML)-Number(spent.innerHTML);
    
   



    let tabrow=document.createElement('tr');
    let td1=document.createElement('td');
    td1.innerHTML=++x;
    let td2=document.createElement('td');
    td2.innerHTML=item.value;
    let td3=document.createElement('td');
    td3.innerHTML=AmtSpent.value;
    
    downTable.append(tabrow);
    tabrow.append(td1);
    tabrow.append(td2);
    tabrow.append(td3);

     AmtSpent.value=""
    item.value=""
}