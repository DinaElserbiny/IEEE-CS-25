// تكلفه 3
class User3 {
    #c3;
    constructor(username3, card3) {
      this.u3 = username3;
      this.#c3 = card3.toString().replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1-");
    }
  
    get showData3() {
      return `Hello ${this.u3} Your Credit Card Number Is ${this.#c3}`;
    }
  
    get c3() {
      return undefined;
    }
  }
  
  let userOne3 = new User3("Osama", "1234-5678-1234-5678");
  let userTwo3 = new User3("Ahmed", "1234567812345678");
  let userThree3 = new User3("Ghareeb", 1234567812345678);
  
  console.log(userOne3.showData3);
  console.log(userTwo3.showData3);
  console.log(userThree3.showData3);
  
  console.log(userOne3.c3);
  