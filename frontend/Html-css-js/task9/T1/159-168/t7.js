// تكلفه 7

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  function* genAll() {
    let seen = new Set();
  
    for (let value of genNumbers()) {
      if (!seen.has(value)) {
        seen.add(value);
        yield value;
      }
    }
  
    for (let value of genLetters()) {
      if (!seen.has(value)) {
        seen.add(value);
        yield value;
      }
    }
  }
  
  let generator2 = genAll();
  
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  