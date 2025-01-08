// ⁡⁣⁢⁣Web Storage API⁡ -> Local Storage, Session Storage & cookie

/*⁡⁣⁣⁢ Web Storage is one of the great features of HTML5. with
this feature, web applications can locally store data within the browser
on the client side. it stores data in the form of key/value pair 
on the browser.⁡
*/

/* ⁡⁢⁣⁣Local Storage⁡⁢⁣⁣:-⁡

-> ⁡⁣⁢⁣It is a form of web storage that stores data for a long time.⁡

-> It only stores data in the form of strings. 

-> JSON.stringify() to convert (objects, list or arrays) into string
so as to store the data. 

-> ⁡⁣⁣⁢To set Data -> localStorage.setItem("key", "value").⁡

-> ⁡⁢⁣⁣To read Data -> localStorage.getItem("key");⁡

-> ⁡⁣⁢⁣To remove Data -> localStorage.removeItem("key") {removes only the key/value pair present in quotes}.⁡

-> ⁡⁢⁣⁣To remove whole Data -> localStorage.clear()⁡

-> ⁡⁣⁣⁢Limit is upto 5MB per app per browser and never expired⁡

localStorage.setItem('name','Shikhar')
localStorage.setItem('place','Jaipur')


localStorage.removeItem("name")
console.log(localStorage.getItem('name'))
localStorage.clear();


*/

/* ⁡⁣⁣⁢Session Storage:-⁡

-> It is a popular choice when it comes to storing data on a browser. 

-> ⁡⁢⁣⁣session storage only keeps data for a particular session. the data 
is cleared once the user closes the browser window.⁡

-> ⁡⁣⁣⁢⁡⁣⁢⁣To set Data -> sessionStorage.setItem("key", "value").⁡⁡

-> ⁡⁢⁣⁣⁡⁣⁣⁢To read Data -> sessionStorage.getItem("key");⁡

-> ⁡⁣⁢⁡⁢⁣⁣To remove Data -> sessionStorage.removeItem("key") {removes only the key/value pair present in quotes}.⁡⁡

-> ⁡⁣⁣⁢limit only by system memory and expired as soon as tab is closed.⁡


sessionStorage.setItem('name','Shikhar')
sessionStorage.setItem('place','Jaipur')


// sessionStorage.removeItem("name")
console.log(sessionStorage.getItem('name'))
sessionStorage.clear();


*/

/* ⁡⁣⁣⁢⁡⁣⁣⁢Cookies:⁡-⁡ 

-> It is initially used to store info about the websites that you visit 
but with technology advancement, a cookie can track your web activites
and retrieve your content preferences. 

-> It comes with expiry date. 

-> It size is much smaller around 4kb. 

-> cookies can be sent to server with every request. 


document.cookie="userName= Shikhar; expires=9 Jan 2025 12:00:00 UTC"




*/




