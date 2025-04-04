
// Below we have target input,addbtn & Tasks.
 let Input = document.querySelector("#todoInput");
let addbtn = document.querySelector("#AddBtn");
let todoCont = document.querySelector("#todoItems");





let BgColor = [
  { backgroundColor: "#FFEEA9", color: "black" },
  { backgroundColor: "#F9D689", color: "black" },
  { backgroundColor: "#F6E9B2", color: "black" },
  { backgroundColor: "#FFE0B6", color: "black" },
];


let ItemArr = [];
let count = 0;
let flag = false;
let currentEditPara = null;
let changedObjectTask;

addbtn.addEventListener("click", Tasks);

function Tasks() {

  if (Input.value === "") {
    alert("Please Enter the task !");
  } 
  
  
  else {
    if (flag) {
      currentEditPara.innerHTML = Input.value;
      ItemArr = ItemArr.map((item) => {
        if (item.task === changedObjectTask) {
          item.task = Input.value;
        }
        return item;
      });
      console.log(ItemArr);
      flag = false;
      currentEditPara = null;
      Input.value = "";
    } 
    
    else {
      let para = document.createElement("p");
      let delBtn = document.createElement("span"); // delBtn & deli will wrapped together. 
      let deli = document.createElement("i"); // delete icon
      let editBtn = document.createElement("span"); // EditBtn & editi will be wrapped together. 
      let editi = document.createElement("i"); // edit icon
      let ItemDiv = document.createElement("div");
      let btnDiv = document.createElement("div");
      para.innerHTML = Input.value;

      let itemObj = {
        id: ++count,
        task: para.innerHTML,
      };

      ItemDiv.classList = "items";
      btnDiv.classList = "btns";

      let Colors = BgColor[BGColor()];

      ItemDiv.style.backgroundColor = Colors.backgroundColor;
      ItemDiv.style.color = Colors.color;

      deli.classList = "fa-solid fa-trash";
      editi.classList = "fa-solid fa-pencil";

      editBtn.append(editi);
      delBtn.append(deli);
      btnDiv.append(delBtn, editBtn);
      ItemDiv.append(para, btnDiv);
      todoCont.append(ItemDiv);

      delBtn.addEventListener("click", function () {
        Delete(itemObj.id, ItemDiv);
      });

      editBtn.addEventListener("click", function () {
        edit(para, itemObj.task);
      });

      ItemArr.push(itemObj);
      console.log(ItemArr)
      Input.value = "";
    }
  }
}

function Delete(ID, ItemDiv) {
  ItemArr = ItemArr.filter((Arrayitem) => Arrayitem.id !== ID);
  ItemDiv.remove();
  
}

function edit(para, Task) {
  Input.value = para.innerHTML;
  para.innerHTML = "";
  changedObjectTask = Task;
  flag = true;
  currentEditPara = para;
  console.log(currentEditPara);
  
}

function BGColor() {
  return Math.floor(Math.random() * BgColor.length);
}

