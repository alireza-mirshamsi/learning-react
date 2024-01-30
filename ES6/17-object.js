let car = {
    name: "peride",
    price: 2000,
    color: "white",
    move: () => {
        return "ماشین در حال حرکت است";
    }
}
console.log(car.name)
console.log(car.move())

let person = {
    firstName: "alireza",
    lastName: "mirshamsi",
    fullName: (firstname, lastname) => {
        return "نام کامل:" + firstname + " " + lastname
    }
}
console.log(person.fullName("reza", "mirshamsi")); // reza mirshamsi