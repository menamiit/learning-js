const cars = ['ferrari', 'merc', 'porche', 'bmw']
const chocolate = ['Kit-Kat', 'Ferrero-Rocher', 'Snickers']

// cars.push(chocolate)
// console.log(cars);

// ---TO CONCATINATE TWO ARRAYS' ELEMENTS DIRECTLY---


// const choco_cars = cars.concat(chocolate)
// console.log(choco_cars); 

// ---ANOTHER METHOD---

// const cars_choco = [...cars, ...chocolate]
// console.log(cars_choco);

// ---TO ADD ELEMENTS OF NESTED ARRAYS'S DIRECTLY---

const myArray = [2, 6 , 3, [8, 3, 9, [7]]]
const newArray = myArray.flat(Infinity)
console.log(newArray);

//  ---TO FIND WETHER ARRAY OR NOT---

console.log(Array.isArray(9));

// ---TO CONVERT AN ELEMENT INTO AN ARRAY---

console.log(Array.from("Batman")); 

// IMPORTANT NOTE

console.log(Array.from({name: "John"})); /* returns a empty/null array */

let n1 = 4;
let n2 = 8;
console.log(Array.of(n1, n2)); /* for converting multiple constants/variables */