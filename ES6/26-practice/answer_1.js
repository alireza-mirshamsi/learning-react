function createPasswordChecker() {
    count = 0;

    function checkPassword(password) {
        switch (password) {
            case "QueraCollegeFront":
                if (count <= 2) { return "Welcome"; }
            case "CollegeFront":
                if (count <= 2) { return "Welcome"; }
            case "QueraCollege":
                if (count <= 2) { return "Welcome"; }
            case "QueraCollegeGolang":
                return "Your account has been blocked!";
            case undefined:
                return "Password cannot be empty";
            default:
                passWrong = `Your password => ${password} is wrong!`;
                count += 1;
                if (count > 2) {
                    return "Your account has been blocked!";
                } else {
                    return passWrong;
                }
        }
    }


    return checkPassword;
}

module.exports = createPasswordChecker();