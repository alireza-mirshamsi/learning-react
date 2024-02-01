let isMale = true;
if (isMale === true) {
    console.log("user is male");
} else if (isMale === false) {
    console.log("user is female");
}

let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
        // موارد دیگر
    default:
        dayName = "Invalid day";
}

console.log("Today is " + dayName);

// ** Ternary Operator🔗 **//
let isAdult = true;
let message = isAdult ? "You are an adult" : "You are not an adult";