// تكليف 1
let setOfNumbers1 = new Set([10]);
setOfNumbers1.add(20).add(setOfNumbers1.size);
console.log(setOfNumbers1);
console.log([...setOfNumbers1][setOfNumbers1.size - 1]);

//-----------------------------

//تليف 2
let friends2 = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(friends2)].sort());


//--------------------

//تكليف 3

let info3 = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
  let map3 = new Map(Object.entries(info3));
  console.log(map3);
  console.log(map3.size);
  console.log(map3.has("role"));

  //--------------------- 

  // تكلف  4
  let number4 = 100020003000;
console.log(+[...new Set([...`${number4}`)].filter(e => e !== '0').join('')));

//------------------------

// تكلفه 5
let name5 = "Elzero";
console.log(name5.split(""));
console.log([...name5]);
console.log(Array.from(name5));
console.log(Object.assign([], name5));
console.log([...new Set(name5)].flatMap(c => name5.match(new RegExp(c, 'g'))));

//-------------------

//تكلفه 6

let chars6 = ["A", "B", "C", "D", "E", 10, 15, 6];
chars6 = [...chars6.filter(e => typeof e === "number").fill(null).map((_, i) => chars6[i]), ...chars6.filter(e => typeof e !== "number")];
console.log(chars6);

let chars6b = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
chars6b = [...chars6b.filter(e => typeof e === "number").fill(null).map((_, i) => chars6b[i]), ...chars6b.filter(e => typeof e !== "number")];
console.log(chars6b);

let chars6c = ["Z", "Y", "A", "D", "E", 10, 1];
chars6c = [...chars6c.filter(e => typeof e === "number").fill(null).map((_, i) => chars6c[i]), ...chars6c.filter(e => typeof e !== "number")];
console.log(chars6c);


//--------------------------

//تكلفه 7

let numsOne7 = [1, 2, 3];
let numsTwo7 = [4, 5, 6];

console.log(numsOne7.concat(numsTwo7));
console.log([...numsOne7, ...numsTwo7]);
console.log(Array.from(new Set([...numsOne7, ...numsTwo7])));


//------------------------

//تكلفه 8

let n1_8 = [10, 30, 10, 20];
let n2_8 = [30, 20, 10];
console.log((n1_8.at(-1) + n2_8.length) * n1_8[0]);

