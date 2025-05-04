// تكلفه 6

function* gen() {
    let value = 14;
    let step = 140;
  
    while (true) {
      yield value;
      value += step;
      step += 140;
    }
  }
  
  let generator = gen();
  
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  