// ⁡⁣⁢⁣Web Storage API⁡ -> Local Storage, Session Storage & cookie

/*⁡⁣⁣⁢ Web Storage is one of the great features of HTML5. with
this feature, web applications can locally store data within the browser
on the client side. it stores data in the form of key/value pair 
on the browser.⁡
*/

/* ⁡⁢⁣⁣Local Storage⁡⁢⁣⁣:-⁡

-> It is a form of web storage that stores data for a long time.

-> It only stores data in the form of strings. 

-> JSON.stringify() to convert (objects, list or arrays) into string
so as to store the data. 

-> ⁡⁣⁣⁢To set Data -> localStorage.setItem("key", "value").⁡

-> ⁡⁢⁣⁣To read Data -> localStorage.getItem("key");⁡

-> ⁡⁣⁢⁣To remove Data -> localStorage.removeItem("key") {removes only the key/value pair present in quotes}.⁡

-> ⁡⁣⁣⁢Limit is upto 5MB per app per browser and never expired⁡

*/

/* ⁡⁣⁣⁢Session Storage:-⁡

-> It is a popular choice when it comes to storing data on a browser. 

-> session storage only keeps data for a particular session. the data 
is cleared once the user closes the browser window. 

-> ⁡⁣⁣⁢⁡⁣⁢⁣To set Data -> sessionStorage.setItem("key", "value").⁡⁡

-> ⁡⁢⁣⁣⁡⁣⁣⁢To read Data -> sessionStorage.getItem("key");⁡

-> ⁡⁣⁢⁡⁢⁣⁣To remove Data -> sessionStorage.removeItem("key") {removes only the key/value pair present in quotes}.⁡⁡

-> ⁡⁣⁣⁢limit only by system memory and expired as soon as tab is closed.⁡

*/

/* ⁡⁣⁣⁢Cookies:-⁡ 







*/





const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");

const btnClick = () => {
  alert(input.value);
  sessionStorage.setItem("key1", input.value);
};

btn.addEventListener("click", btnClick);
