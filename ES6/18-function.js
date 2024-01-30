function greet(name) {
    console.log("سلام " + name + "!");
}
greet("آلیس");

// ** arrowfunc **
const sayHello = (name) => {
    console.log("Hello " + name + "!");
};


// Regular function definition
function RegularFunction() {
    console.log(this);
}

const obj = { method: RegularFunction };
obj.method(); // Here, the value of 'this' refers to the 'obj' object.

// Arrow function definition
const ArrowFunction = () => {
    console.log(this);
};

const arrowObj = { method: ArrowFunction };
arrowObj.method(); // Here, the value of 'this' refers to the outer environment of the function.

// ********* //
function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayInfo = function() {
        console.log(make)
    }
}

let newCar = new car("tiba", "saypa", "2020")
console.log(newCar)