//تكلفه 1
let start1 = 10;
let end1 = 100;
let exclude1 = 40;

for(let i=start1; i<=end1; i+=10)
{
    if(i==exclude1) continue;
    console.log(i)
}

//------------------------------------

//تكلفه2
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i >= stop2; i--) {
    if (i < 10) {
        console.log("0" + i);
    } else {
        console.log(i);
    }
}
//------------------------------------------

//تكلفه 3
let start3 = 1;
let end3 = 6;
let breaker3 = 2;

for (let i = start3; i <= end3; i++) {
    console.log(i);
    for (let j = breaker3; j < end3; j += breaker3) {
        console.log("-- " + j);
    }
}
//----------------------------------------------------

//تكلفه 4
let index4 = 10;
let jump4 = 2;

for ( ; index4 >= jump4 * jump4 ;) {
  console.log(index4);
  index4 -= jump4;
}

//-----------------------------------------------------------------

//تكلفه 5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length - letter.length; 

for (let i = count; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) {
    continue; 
  }
  count += letter.length; 
  document.write(`${count} => ${friends[i]} <br>`); // طباعة على الشاشة
}

//-----------------------------------------------------------------------------------------

//تكلفه 6
let start6 = "".length;
let swappedName = "elZerO";
let result = "";

for (let i = start6; i < swappedName.length; i++) {
  let char = swappedName[i];
  
  if (char.toUpperCase() === char) {
    result += char.toLowerCase();
  } else {
    result += char.toUpperCase();
  }
}

console.log(result); // "ELzERo"
//---------------------------------------------------------------------------------------

//تكلفه 7
let start7 = "".length; // يساوي 0
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start7; i < mix.length; i++) {
  if (typeof mix[i] === typeof start7 && mix[i] !== start7 + true) {
    console.log(mix[i]);
  }
}
