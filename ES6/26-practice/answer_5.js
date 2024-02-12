function createPasswordChecker() {
    let wrong = 0;
    let blocked = false;
    const checkPassword = (pass) => {
        const welcomePass = ["QueraCollegeFront", "CollegeFront", "QueraCollege"];
        if (welcomePass.includes(pass) && !blocked) return "Welcome";

        if (!pass) return "Password cannot be empty";

        wrong++;

        if (pass === "QueraCollegeGolang") {
            blocked = true;
            return "Your account has been blocked!";
        }

        if (wrong >= 3) {
            blocked = true;
            return "Your account has been blocked!";
        }

        return `Your password => ${pass} is wrong!`;
    };

    checkPassword("wrooong")
    checkPassword("QueraCollegeFront")
    checkPassword("wrrrrrrrrrong")
    checkPassword("QueraCollegeFront")
    console.log(checkPassword("wwwwwwwwwwwrong"))
    return checkPassword;
}

module.exports = createPasswordChecker();