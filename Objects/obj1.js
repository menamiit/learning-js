let car = {
    brand: "Porsche",
    model: "911",
    year: 2022
}

// console.log(car)
console.log(car.brand)
console.log(car.model)

// destructuring object

let {brand, ...rest} = car;

console.log(brand);

// structuring object
let newCar = {brand, ...rest}; /* Cannot redeclare object */
