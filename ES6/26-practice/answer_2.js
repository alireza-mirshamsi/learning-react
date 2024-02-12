function createPasswordChecker() {
    const validPasswords = ["QueraCollegeFront", "CollegeFront", "QueraCollege"];
    const blockedPassword = "QueraCollegeGolang";
    let wrongPasswordCount = 0;
    let isBlocked = false;

    function isPasswordValid(password) {
        return validPasswords.includes(password);
    }

    function isBlockedPassword(password) {
        return password === blockedPassword;
    }

    function isEmptyPassword(password) {
        return password === "" || password === null;
    }

    function checkPassword(password) {
        if (isEmptyPassword(password)) {
            return "Password cannot be empty";
        }

        if (isBlocked) {
            return "Your account has been blocked!";
        }

        if (isPasswordValid(password)) {
            return "Welcome";
        } else if (isBlockedPassword(password)) {
            isBlocked = true;
            return "Your account has been blocked!";
        } else {
            wrongPasswordCount++;
            if (wrongPasswordCount >= 3) {
                isBlocked = true;
                return "Your account has been blocked!";
            } else {
                return "Your password => " + password + " is wrong!";
            }
        }
    }

    checkPassword("wrooong")
    checkPassword("QueraCollegeFront")
    checkPassword("wrrrrrrrrrong")
    checkPassword("QueraCollegeFront")
    console.log(checkPassword("wwwwwwwwwwwrong"))

    return checkPassword;
}

module.exports = createPasswordChecker()