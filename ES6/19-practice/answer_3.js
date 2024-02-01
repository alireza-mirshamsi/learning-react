function filteredUserList(users) {
    if (!Array.isArray(users)) {
        return "Input must be an array of users"
    }
    return users.filter(user => {
        return user.age > 11
    }).sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
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

module.exports = filter;