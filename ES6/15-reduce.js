// **** ساختار reduce **** //

// const result = array.reduce(function(accumulator, currentValue, index, array) {
//     // Perform an operation on the accumulator and currentValue
//     return updated accumulator;
// }, initialValue);

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0)
console.log(sum)

// فرض کنید می‌خواهید ماکزیمم عدد را از یک آرایه اعداد بیابید:
const maxNumber = numbers.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue)
}, -Infinity)
console.log(maxNumber) // 5