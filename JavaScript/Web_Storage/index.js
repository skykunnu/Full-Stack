// ⁡⁣⁢⁣Web Storage API⁡ -> Local Storage, Session Storage & cookie

/*⁡⁣⁣⁢ Web Storage is one of the great features of HTML5. with
this feature, web applications can locally store data within the browser
on the client side. it stores data in the form of key/value pair 
on the browser.⁡
*/

/* ⁡⁢⁣⁣Local Storage⁡⁢⁣⁣:-⁡

-> ⁡⁣⁢⁣It is a type of web storage that stores the data for a long time (ie day, week or even a year).⁡ 

-> It only stores data in the form of strings. 

-> JSON.stringify() to convert (objects, list or arrays) into string
so as to store the data. 

-> ⁡⁣⁣⁢To set Data -> localStorage.setItem("key", "value").⁡

-> ⁡⁢⁣⁣To read Data -> localStorage.getItem("key");⁡

-> ⁡⁣⁢⁣To remove Data -> localStorage.removeItem("key") {removes only the key/value pair present in quotes}.⁡

-> ⁡⁢⁣⁣To remove whole Data -> localStorage.clear()⁡

-> ⁡⁣⁣⁢Limit is upto 5MB per app per browser and never expired⁡

-> ⁡⁢⁣⁣can be accessed on client side only⁡ 

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

-> ⁡⁢⁣⁣can be accessed on client side only⁡⁡ 


sessionStorage.setItem('name','Shikhar')
sessionStorage.setItem('place','Jaipur')


// sessionStorage.removeItem("name")
console.log(sessionStorage.getItem('name'))
sessionStorage.clear();


*/

/* ⁡⁣⁣⁢⁡⁣⁣⁢Cookies:⁡-⁡ 

-> ⁡⁣⁢⁣It is initially used to store info about the websites that you visit 
but with technology advancement, a cookie can track your web activites
and retrieve your content preferences.⁡ 

-> ⁡⁣⁣⁢Can set expiration date. ⁡

-> ⁡⁢⁣⁣It size is much smaller around 4kb. ⁡

-> ⁡⁣⁣⁢cookies sent to the server with every HTTP request.⁡




document.cookie="userName= Shikhar; expires=9 Jan 2025 12:00:00 UTC"




*/




