function filteredUserList(users) {
    if (Array.isArray(users)) {
        let newArray = [];
        for (var i = 0; i < users.length; i++) {
            newArray.push(users[i])
        }
        const sortName = newArray.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        const result = sortName.filter((item) => {
            return item.age > 11;
        })
        return result;
    }
    if (typeof users === "undefined") {
        return null;
    }
    if (Array.isArray(users) == false) {
        return `Input must be an array of users`;
    }
}

const filter = filteredUserList;

const users = [
    { name: "ali", age: 10 },
    { name: "JAVAD", age: 12 },
    { name: "hossein", age: 45 },
    { name: "SAJJAD", age: 11 },
    { name: "REZA", age: 20 },
];

console.log(filter());
console.log(filter(users));
console.log(filter({ age: 30 }));

module.exports = filter;