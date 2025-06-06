const myArray = ["U", "K", "U", "L", "E", "L", "E"]

const heroes = ["Batman", "Spiderman", "Thor", "Captain"];

// console.log("best = " + heroes[0]);


// ---ARRAY METHODS---

heroes.push("Hara-Hara Hulk")
heroes.pop() /* removes the last element only*/
heroes.unshift("Hawkeye")
heroes.shift()
// console.log(heroes)


// console.log(myArray.includes("L"));
// console.log(myArray.indexOf("E"));

// const newArr = myArray.join()  /* ---converts an array to string type--- */

// console.log(myArray);
// console.log(newArr);

const myArr = [2, 4, 6, 3, 7, 4]
console.log("Orig. Array = ", myArr);

const myA1 = myArr.slice(2, 4);
console.log("Sliced Array = ", myA1);

const myA2 = myArr.splice(2, 4);
console.log("Spliced Array = ", myA2);
console.log(myArr);


