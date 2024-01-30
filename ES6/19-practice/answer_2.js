function filteredUserList(users) {
    if (users instanceof Array) {
        const user = users.filter((user) => { return user.age > 11 });
        return user;
    } else {
        return "Input must be an array of users";

    }

}

const filter = filteredUserList;

const users = [
    { name: "ali", age: 10 },
    { name: "hossein", age: 45 },
    { name: "JAVAD", age: 12 },
    { name: "REZA", age: 20 },
    { name: "SAJJAD", age: 11 },
];

console.log(filter(users));
console.log(filter([]))
console.log(filter({ age: 30 }))

module.exports = filter;