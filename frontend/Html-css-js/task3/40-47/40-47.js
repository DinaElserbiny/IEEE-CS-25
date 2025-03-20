//تكلفه 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,myFriends.length - 1)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends[0],myFriends[1],myFriends[2]); // ["Ahmed", "Elham", "Osama"];

//-----------------------------------------------------------------------------------

//تكلفه2 
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]


//----------------------------------------------------------

//تكلفه 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr =  (arrTwo.concat(arrOne)).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//---------------------------------------------------------------------------

// تكلفه 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO
//anther solution
console.log((words.shift(), words.shift(), words[0][0].replace("El","").toUpperCase()));


//----------------------------------------------------------------

//تكلفه 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];


//first solution 
if (haystack.includes(needle)==1)
{
    console.log("Found");
}

//secound
if (haystack[1]==needle)
    {
     console.log("Found");
    }
 //third   
if (haystack.indexOf(needle) !== -1)
    {
     console.log("Found");
    }

//------------------------------------------------------
// تكلفه 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.splice(0,2);
arr2.splice(0,2);

allArrs=arr2[0].concat(arr1,arr2[1]).toLowerCase();

console.log(allArrs); // fxy