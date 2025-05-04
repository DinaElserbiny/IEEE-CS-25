// تكلفه 1
let birthDate = new Date("Jan 1, 1984");
let now = new Date();

let diffInMilliseconds = now - birthDate;
let diffInSeconds = Math.floor(diffInMilliseconds / 1000);
let diffInMinutes = Math.floor(diffInSeconds / 60);
let diffInHours = Math.floor(diffInMinutes / 60);
let diffInDays = Math.floor(diffInHours / 24);
let diffInMonths = Math.floor(diffInDays / 30.44); // متوسط عدد الأيام في الشهر
let diffInYears = Math.floor(diffInDays / 365.25); // متوسط عدد الأيام في السنة

console.log(`${diffInSeconds} Seconds`);
console.log(`${diffInMinutes} Minutes`);
console.log(`${diffInHours} Hours`);
console.log(`${diffInDays} Days`);
console.log(`${diffInMonths} Months`);
console.log(`${diffInYears} Years`);
