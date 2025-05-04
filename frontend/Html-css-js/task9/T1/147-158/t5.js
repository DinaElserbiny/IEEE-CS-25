const myObj5 = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  Object.defineProperty(myObj5, "score", {
    writable: false,
    enumerable: true,
  });
  
  Object.defineProperty(myObj5, "id", {
    enumerable: false,
  });
  
  Object.defineProperty(myObj5, "country", {
    enumerable: false,
    configurable: false,
  });
  
  myObj5.score = 500;
  
  for (let prop5 in myObj5) {
    console.log(`${prop5} => ${myObj5[prop5]}`);
  }
  
  console.log(myObj5);
  