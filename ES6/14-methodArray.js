// ** method map ** //
// ما می‌خواهیم تمام ایمیل هایی که با @quera.ir به اتمام میرسند را به yahoo.com تغییر بدهیم
const emails = [
    "TheDebonair@gmail.com",
    "TheMarried@gmail.com",
    "TheCondemned@gmail.com",
    "TheUsed@gmail.com",
    "TheCultured@gmail.com",
    "Even@yahoo.com",
    "Green@yahoo.com",
    "Thoughtless@yahoo.com",
    "Sparkling@quera.ir",
    "Feeble@quera.ir",
    "Equal@quera.ir",
    "Labored@icloud.com",
    "Rare@icloud.com",
    "Possible@icloud.com",
    "Faded@icloud.com",
    "Gusty@icloud.com"
]

// روش قدیمی
// let convertedEmails = []
// for (const email of emails) {
//     convertedEmails.push(email.replace("@quera.ir", "@yahoo.com"))
// }
// console.log(convertedEmails)

// روش map
const convertedEmails = emails.map(item => item.replace("@quera.ir", "@yahoo.com"))
console.log(convertedEmails)

//مثال یک آرایه ای که مجموعه ای از اعداد را تشکیل می‌دهد و ما می‌خواهیم اعداد درون آن بر دو ضرب بشوند
const numbers = [1, 2, 3, 4, 5]
    //const doubleNumber = numbers.map(item => item * 2) // روش دیگر
const doubleNumber = numbers.map(function(number) {
    return number * 2;
})
console.log(doubleNumber)

// ** method filter ** //
// let gmailEmails = [];
// for (var i = 0; i < emails.length; i++) {
//     if (emails[i].endsWith("@gmail.com")) {
//         gmailEmails.push(emails[i]);
//     }
// }
// console.log(gmailEmails);
let gmailEmails = emails.filter((email) => {
    return email.endsWith("@gmail.com")
})
console.log(gmailEmails)