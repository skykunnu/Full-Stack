// set constructor-> the constructor optionaly accepts array as an argument. 

const set=new Set([1,2,3]);

set.add(4) // to add a new value. 

console.log(set.has(4)) // It tells whether the element is present or not by returning boolean value. 

// set.delete(3) // deletes the element from the set. 

console.log(set.size) // returns the size of the set.

set.clear() // It removes all values from the set. 
 
for(const item of set){
    console.log(item) 
}





