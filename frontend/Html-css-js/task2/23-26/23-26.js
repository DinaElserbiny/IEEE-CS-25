// تكلف 1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(+100000); // 100000
console.log(+"100000"); // 100000
console.log(-"-100000"); // 100000
console.log(- -100000); // 100000
console.log(10**5); // 100000
console.log(parseInt(100000)); // 100000
console.log(Math.round(100000)); // 100000
console.log(50_000 + 50_000); // 100000
console.log(Math.ceil(100000)); // 100000
console.log(Math.floor(100000)); // 100000
//---------------------------------------------------------

//تكلفه 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//تكلفه 3
console.log(((9007199254741008 - Number.MAX_SAFE_INTEGER))-1); // 16

//تكلفه4
let myVar = "100.56789 Views";
console.log(Number.parseInt(myVar)); // 100
console.log(+(Number.parseFloat(myVar).toFixed(2))); // 100.57

//تكلفه 5
let num = 10;
console.log(Number.isInteger(num)+1); // 2

//تكلفه 6
let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Math.ceil(flt) - 1); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10

//تكلفه 7
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4


