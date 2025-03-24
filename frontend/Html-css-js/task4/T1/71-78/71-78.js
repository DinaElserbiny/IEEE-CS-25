// تكلفه 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result1 = mix
  .map((el) => (typeof el === "string" ? el : "")) 
  .reduce((acc, curr) => acc + curr); 
console.log(result1); // "Elzero"
//----------------------------------------------------------------------
// تكلفه 2
let myString = "EElllzzzzzzzeroo";

let result2 = myString
  .split("") // تحويل النص إلى مصفوفة من الحروف
  .filter((char, index, arr) => arr.indexOf(char) === index) // الاحتفاظ بأول ظهور فقط لكل حرف
  .join(""); // تحويل المصفوفة إلى نص

console.log(result2); // "Elzero"



//----------------------------------------------------------------------

//تكلفه  3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result3 = myArray
  .reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr : [curr]), []) 
  .join(""); 
console.log(result3); // "Elzero"

//----------------------------------------------------------------------------

//تكلفه 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result4 = numsAndStrings
  .filter(item => typeof item === "number") 
  .map(num => -num); 

console.log(result4); // [-1, -10, 10, 20, -5, -3]

//----------------------------------------------------------------------------


//تكلفه 5
let nums = [2, 12, 11, 5, 10, 1, 99];

let result5 = nums.reduce((acc, curr) => {
  return curr % 2 === 0 ? acc * curr : acc + curr; 
}, 1); // Initial Value = 1

console.log(result5); // 500
