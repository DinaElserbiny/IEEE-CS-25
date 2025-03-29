// تكلفه 1
// Create Your Object Here
let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
    },
  };

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt

console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//----------------------------------------------------------------------------------------------

//تكلفه 2
// Method One
// Create Your Object Here
let objMethodOne ={
    property: "Method one"
};
console.log(objMethodOne.property); // "Method One"


// Method Two
// Create Your Object Here
let objMethodTwo =new Object();
objMethodTwo.property ="Method two"
console.log(objMethodTwo.property); // "Method Two"


// Method Three
// Create Your Object Here
function ObjMethodThree() {
    this.property = "Method Three"; }
let objMethodThree = new ObjMethodThree();
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.create({});
objMethodFour.property = "Method Four";
console.log(objMethodFour.property); // "Method Four"

//------------------------------------------------------------------------------------------

//تكلفه 3

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

//--------------------------------------------------------------------------------------------------------------------

//تكلفه 4

// The Object To Work With
let myFavGames = {

    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },

    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },


    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
  
// Code One => How To Get Object Length ?
// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

let gameNames = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  let game = myFavGames[gameNames[i]];
  
  console.log(`The Game Name Is ${gameNames[i]}`);
  console.log(`The Publisher Is ${game.publisher}`);
  console.log(`The Price Is ${game.price}`);

  // Check If Nested Object Has Property (bestThree)
  if (game.hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${game.bestThree.one}`);
    console.log(`Second => ${game.bestThree.two}`);
    console.log(`Third => ${game.bestThree.three}`);
  }
  console.log("#".repeat(20));
}
