function filteredUserList(users) {
    // check if parameter empty
    if (
        users === undefined ||
        (typeof users === "string" && users.trim().length === 0)
    ) {
        return '';
    }

    // check if parameter is array
    if (Array.isArray(users)) {
        let filteredUsers = users.filter((user) => user["age"] > 11);
        // filter>11
        filteredUsers.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        return filteredUsers;
    }
    return "Input must be an array of users";
}


const filter = filteredUserList;

const users = [
    { name: "ali", age: 10 },
    { name: "hossein", age: 45 },
    { name: "JAVAD", age: 12 },
    { name: "REZA", age: 20 },
    { name: "SAJJAD", age: 11 },
];
console.log(filter(""));

module.exports = filter;