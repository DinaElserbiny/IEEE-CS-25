// تكلفه 1
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); //e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

//تكلفه 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // True
console.log(word.toLowerCase().startsWith(letterE.toLowerCase())); // True
console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // True
