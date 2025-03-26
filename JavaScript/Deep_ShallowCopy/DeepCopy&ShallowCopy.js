// There are two ways to create a copy of an object:-

/* ⁡⁣⁣⁢Deep Copy - It is a copy of an object whose properties do not share the same reference as that of the source object from 
which the copy was made. As a result changes in either of them does not affect other.⁡ 
*/

/* ⁡⁢⁣⁣Shallow Copy - It is a copy of an object whose properties share the same reference as that of the source object from
  which the copy was made. As a result changes in either of them affect both original object & copied object. ⁡
*/

// ⁡⁣⁢⁣A shallow copy means the first level is copied, deeper levels are referenced.⁡

const foodItems = {
  food1: "Pasta",
  food2: "Pizza",
  food3: "Chowmein",
  food4: "Lassi",
};

let anotherFood = foodItems; // copying(refrencing) of object(foodItems) into new variable.

// anotherFood.food1="Panner Tikka"

// console.log(anotherFood.food1) // Panner Tikka
// console.log(foodItems.food1) // Panner Tikka

/* Why both of them have same values? because both new & old variables are pointing to same memory location, That means changing of values in any of them will reflect in both. */

// hence In above example we actually made a shallow copy.

// ⁡⁡⁣⁣⁢Below methods creates Shallow copy.⁡

/*
// ⁡⁣⁢⁣Object's Method (Ways of cloning an object):-

1. ⁡⁣⁢⁣Using ⁡⁣⁢⁣Destructuring⁡⁡

let obj1={
name:"shikhar",
age:24,

hobbies:{
h1:'cricket',
h2:'Stocks',
h3:'Poker',
h4:'reading'
}

}

let obj2={...obj1};

obj2.name='Dikshant'
obj2.hobbies.h1='Music';

console.log("Obj1",obj1.name, obj2.name); // shikhar, Dikshant because name property is of primitive data type so in this shallow copy will not be performed. 

console.log("Obj2",obj1.hobbies.h1,obj2.hobbies.h1); // Music, Music because hobbies property is of non primitive data type so in this case shallow copy is performed. 


2. ⁡⁣⁢⁣using Object.assign() ⁡

let obj1={
name:"shikhar",
age:24,

hobbies:{
h1:'cricket',
h2:'Stocks',
h3:'Poker',
h4:'reading'
}

}

let obj2=Object.assign({},obj1);

obj2.name='Dikshant'
obj2.hobbies.h1='Music';

console.log("Obj1",obj1.name, obj2.name); // shikhar, dikshant same explanation as above. 
console.log("Obj2",obj2.hobbies.h1, obj1.hobbies.h2); // Music, Music same explanation as above.

⁡

// ⁡⁢⁣⁣Array's Method (Ways of cloning an Array):-

1. Spread Operator
2. Array functions (Map,reduce,filter)
3. Array.slice()⁡

but a problem arises in both the above methods is when we try to copy nested object into a new variable , since the nested object inside an object will not 
copied, since they are only references. hence you would end up doing (SHALLOW COPY).

*/

// ⁡⁣⁣⁢To avoid the shallow copy and to make a deep copies of nested objects and nested arrays use below method. ⁡

/* 
# ⁡⁢⁣⁣Deep copy methods of Arrays⁡ ⁡⁢⁣⁣& Object⁡

1. ⁡⁣⁣⁢Using structuredClone()⁡

const obj={

name:"Shikhar",
age:24,
hobbies:{
h1:"cricket",
h2:"GK",
h3:"Music",
h4:"Reading"
}
}

const newObj=structuredClone(obj);

newObj.name="Rishi";
newObj.age=23;
newObj.hobbies.h1='football';


console.log(obj.name,obj.age,obj.hobbies)
console.log(newObj.name,newObj.age,newObj.hobbies)
 





















2. ⁡⁣⁣⁢Using JSON.parse(JSON.stringify())⁡:- Works only with Number and String and Object literal without function or Symbol properties. 

Ex-

const obj = [
    {
      name: "John",
      hobbies: ["reading", "music"],
    },
    {
      name: "Sam",
      hobbies: ["music", "sport"],
    },
  ];


const newObj=JSON.parse(JSON.stringify(obj));

newObj[0].name='Rishi';
newObj[1].hobbies[0]='Gardening';


console.log(obj[0].name); // John
console.log(obj[1].hobbies[0]); // music

console.log(newObj[0].name); // Rishi
console.log(newObj[1].hobbies[0]); // Gardening

Original & new object are independent to each other even in the nested array case. hence this shows that deep copy is performed on the array. 





⁡⁣⁣⁢3. Using Recursive function⁡ 

Recursively copies every element of the array including nested array & object 

*/

function DeepCopyArray(objArr) {
  return objArr.map((item) => {
    // the map method returns a new array where each element is transformed based on the logic.
    if (Array.isArray(item)) {
      return DeepCopyArray(item);
    } else if (item && typeof item === "object") {
      return DeepCopyObject(item);
    } else {
      return item;
    }
  });
}

function DeepCopyObject(obj) {
  /* calls the reduce method on array (keys of obj) to iterate through the keys (property's name) and construct a new object. for ex keys:- [a,b] */
  return Object.keys(obj).reduce((copy, key) => {
    copy[key] = DeepCopyArray([obj[key]])[0];
    /* {}[a]=DeepCopyArray([obj[a]])[0] -> takes the value of obj[a] and wraps it in an array (becoz DeepCopyArray accepts array as an argument) and calls DeepCopyArray on this element and recursively deep copy the property value. 
extracts the deep copied value from the returned array using [0]. 
and result of reduce is fully constructed deep copy of object. 

*/
  }, {});
}

const objArr = [1, [2, 3], { a: 4, b: [5, 6] }];
// const newObj=DeepCopyArray(objArr); //[1,[2,3],{a:4, b:[5,6]}].




// 4. ⁡⁣⁣⁢⁡⁣⁣⁢⁡⁣⁣⁢Using Lodash clonedeep⁡ ⁡ - It works with all types, function & symbol are copied by reference.
// (This is working in browser environment)

const arrOfFunction = [
  () => 2,
  {
    test: () => 3,
  },
  Symbol("4"),
];

let cloneObject = _.cloneDeep(arrOfFunction);

// deepClone copy by reference function and Symbol
// console.log(cloneObject); // [f,{...}, Symbol(4)]

// JSON replace function with null and function in object with undefined

// console.log(JSON.parse(JSON.stringify(arrOfFunction))); // [null,{},null]
