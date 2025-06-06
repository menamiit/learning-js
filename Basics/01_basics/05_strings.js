const name = "namit"
const age = 18
// console.log(name + " is " + age + " years old.");

// another method to declare strings

const personName = new String("Cristiano dos santos aviero ronaldo")
// console.log(personName[8]);
// console.log(personName.__proto__);

// console.log(personName.length);
// console.log(personName.toUpperCase());

// console.log(personName.charAt(22));
// console.log(personName.indexOf('t'));

const newString = personName.substring(28, 35)
// console.log(newString);

const anotherString = personName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   Lightening McQueen    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://github.com/menamiit/learning-js"

console.log(url.replace('js', 'JavaScript'))
console.log(url.includes('github'))


console.log(personName.split(' '));