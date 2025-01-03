// The constructor function optionally accepts an array as an argument. 

const map= new Map([['a',1],['b',2]])

map.set('c',3) // this is a set method not a data structure that sets value in an array.  

for(const [key,value] of map){
   console.log(`${key} : ${value}`);
}