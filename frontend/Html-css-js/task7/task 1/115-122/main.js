//تكلفه 1
let myNumbers = [1, 2, 3, 4, 5];

// Destructuring Assignment
let [a, , , , e] = myNumbers;

console.log(a * e); // 5


//--------------------------------

//تكلفه 2
let mySkillsList = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Destructuring Assignment
let [skill1, skill2, skill3, [framework1, framework2, [tech1, tech2]]] = mySkillsList;

console.log(`My Skills: ${skill1}, ${skill2}, ${skill3}, ${framework1}, ${framework2}, ${tech1}, ${tech2}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel



//----------------------

//تكلفه 3

let friendsGroup1 = ["Ahmed", "Sameh", "Sayed"];
let friendsGroup2 = ["Mohamed", "Gamal", "Amir"];
let friendsGroup3 = ["Haytham", "Shady", "Mahmoud"];

// Destructuring Assignment
let [, , bestFriend1] = friendsGroup1; // Ahmed
let [, secondBestFriend] = friendsGroup2; // Gamal
let [, bestFriend2] = friendsGroup3; // Shady

console.log(`My Best Friends: ${bestFriend2}, ${bestFriend1}, ${secondBestFriend}`);
// My Best Friends: Shady, Mahmoud, Ahmed




//---------------------  

//تكلفه 4
const person = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  // Destructuring Assignment
  let { age: personAge, working: isWorking, country: personCountry, hobbies: [hobby1, , hobby3] } = person;
  
  console.log(`My Age Is ${personAge} And I am ${isWorking ? "" : "Not"} Working`);
  // My Age Is 30 And I am Not Working
  
  console.log(`I Live in ${personCountry}`);
  // I Live in Egypt
  
  console.log(`My Hobbies: ${hobby1} And ${hobby3}`);
  // My Hobbies: Reading And Programming


  //-----------------------------------

  //تكلفه 5
  const videoGame = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  
  // Destructuring Assignment
  let { title: gameTitle, developer: gameDeveloper, releases: gameReleases } = videoGame;
  let { "Oath In Felghana": release1, "Ark Of Napishtim": release2, Origin: originPrice } = gameReleases;
  let [usRegion, jpRegion] = release1;
  let { US: usPrice, JAP: jpPrice } = release2;
  
  console.log(`My Favourite Games Style Is ${gameTitle} Style`);
  // My Favourite Games Style Is YS Style
  
  console.log(`And I Love ${gameDeveloper} Games`);
  // And I Love Falcom Games
  
  console.log(`My Best Release Is ${release1} It Released in ${usRegion} & ${jpRegion}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
  
  console.log(`Although I Love ${release2}`);
  // Although I Love Ark Of Napishtim
  
  console.log(`${release2} Price in USA Is ${usPrice}`);
  // Ark Of Napishtim Price in USA Is 20 USD
  
  console.log(`${release2} Price in Japan Is ${jpPrice}`);
  // Ark Of Napishtim Price in Japan Is 10 USD
  
  console.log(`Origin Price Is ${originPrice}`);
  // Origin Price Is 30 USD

  //---------------------------

  //تكلفه 6
  let selectedFriend = 1;

let friendsList = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Destructuring Assignment based on selectedFriend value
let { title: friendName, age: friendAge, available: isAvailable, skills: [ , skill] } = friendsList[selectedFriend - 1];

console.log(friendName);
console.log(friendAge);
console.log(isAvailable ? "Available" : "Not Available");
console.log(skill);
