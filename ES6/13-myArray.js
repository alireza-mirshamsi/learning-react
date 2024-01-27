let myArray = [1, 2, 3]
console.log(myArray[1]) // 2
console.log(myArray.length) // 3
myArray[2] = 35
console.log(myArray) // [1,2,35

myArray.push(60)
console.log(myArray) // [1,2,35,60]

let number = [1, 2, 3, 4, 5]
let removeItem = number.pop()
let removeItems = number.splice(0, 1)
console.log("delete:", removeItem, "\t", number) // delete: 5        [ 1, 2, 3, 4 ]
console.log(removeItems) // 1

const numbers = [1, 2, 3, 4, 5]
numbers.shift()
console.log(numbers)

numbers.reverse()
console.log(numbers)