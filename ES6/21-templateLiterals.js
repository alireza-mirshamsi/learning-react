const name = 'salar';
const age = 19;

const message = `hello im ${name} and im ${age} years old`;

console.log(message);
// hello im salar and im 19 years old

const score = 85;
const resultMessage = `Your Score: ${score > 60 ? 'Good' : 'Fair'}`
console.log(resultMessage); // Your score: Good

const fruits = ['orange', 'bananna', 'apple'];
const listMessage = `fruit list: ${fruits.join(', ')}`;
console.log(listMessage);
// fruit list: orange , banana , apple