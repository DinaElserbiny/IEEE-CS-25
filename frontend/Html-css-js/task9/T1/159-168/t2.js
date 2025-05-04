// تكلفه 2

let date = new Date(1970, 0, 1); // Jan 1, 1970
date.setFullYear(date.getFullYear() + 10); // +10 سنوات
date.setSeconds(date.getSeconds() + 1); // +1 ثانية

console.log(date.toString());
