//تكلفه 5
let start = performance.now();

for (let i = 1; i <= 99999; i++) {
  console.log(i);
}

let end = performance.now();
let duration = Math.floor(end - start); // إزالة الكسور

console.log(`Loop Took ${duration} Milliseconds.`);
