function createPasswordChecker() {
    let tryTime = 0;
    let accBlocked = false;

    function checkPassword(password) {
        if (!accBlocked) {
            if (password === "QueraCollegeFront") {
                return "Welcome";
            } else if (password === "CollegeFront") {
                return "Welcome";
            } else if (password === "QueraCollege") {
                return "Welcome";
            } else if (password === "QueraCollegeGolang" || 3 <= tryTime) {
                accBlocked = true;
                return "Your account has been blocked!";
            } else if (password === undefined || password === "") {
                return "Password cannot be empty";
            } else {
                tryTime = tryTime + 1;
                if (3 <= tryTime) {
                    accBlocked = true;
                    return "Your account has been blocked!";
                }
                return "Your password => " + password + " is wrong!";
            }
        } else {
            return "Your account has been blocked!";
        }
    }
    let result = checkPassword("QueraCollegeFront");
    console.log(result);
    return checkPassword;
}

module.exports = createPasswordChecker();