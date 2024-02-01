function filteredUserList(users) {
    try {
        let filteredUsers = users.filter((user) => {
            return (user.age > 11 ? user : (null))
        });
        return filteredUsers.sort(function(a, b) {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    } catch (TypeError) {
        return ("Input must be an array of users");
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

module.exports = filter;