// const name: type = value;
const isDone: boolean = true;
const digit: number = 32;
const float: number = 1.2;
const negative: number = -12
const negativeFloat: number = -12.2

const hello: string = "Hello"
const world: string = 'world'

const arrayOfString : string[] = ["ali", "reza"];
const ArrayOfNumbers: number[] = [1,2,3]
const ArrayOfBooleans: boolean[] = [true, false, true]

const myObject :{
    name : string,
    age: number,
    isVerified: boolean,
    email? : string
} = {
    name: "alireza",
    age: 24,
    isVerified: true,
}

// let stringVariable : string = "hello world!"
// stringVariable = 123 //Type 'number' is not assignable to type 'string'.ts(2322)

let stringVariable : any = "hello world!"
stringVariable = 26 // no Error