function filteredUserList(users) {
    if (users === undefined) return users;
    if (!Array.isArray(users)) return "Input must be an array of users";
    return users.filter((user) => user.age > 11).sort((user) => user.name);
}

const filter = filteredUserList;

const users = [
    { name: "ali", age: 10 },
    { name: "hossein", age: 45 },
    { name: "JAVAD", age: 12 },
    { name: "REZA", age: 20 },
    { name: "SAJJAD", age: 11 },
];

console.log(filter(1232));

module.exports = filter;