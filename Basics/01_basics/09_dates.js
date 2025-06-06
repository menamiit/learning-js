const newDate = new Date()

// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleTimeString('en-It'));
// console.log(newDate.toString());
// console.log(newDate.getTimezoneOffset());


// let myCreatedDate = new Date()
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 30)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2024-01-12")
// console.log(myCreatedDate.toLocaleString());

// ---TIMESTAMPS---

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getMonth()+1);
// console.log(myDate.getUTCFullYear());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "short"
})