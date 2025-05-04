//تكلفه 3
let current = new Date();
let lastMonth = new Date(current.getFullYear(), current.getMonth(), 0); // آخر يوم في الشهر السابق

console.log(lastMonth.toString());
console.log(`Previous Month Is ${lastMonth.toLocaleString("default", { month: "long" })} And Last Day Is ${lastMonth.getDate()}`);
