// Optimization //

function createPasswordChecker() {
    return checkPassword;
};
let wrongAttempts = 0;

function checkPassword(password) {
    const validPasswords = [
        "QueraCollegeFront",
        "CollegeFront",
        "QueraCollege"
    ];

    const blockPassword = "QueraCollegeGolang";



    if (!password) {
        return "Password cannot be empty";
    }
    if (wrongAttempts >= 3) {
        return "Your account has been blocked!";
    }
    if (validPasswords.includes(password)) {
        return "Welcome";
    } else if (password === blockPassword) {
        return "Your account has been blocked!";
    } else {
        wrongAttempts++;
        return `Your password => ${password} is wrong!`;
    }
}


module.exports = createPasswordChecker();