 // تكلفه 2
 class Phone2 {
    constructor(name2, serial2, price2) {
      this.name2 = name2;
      this.serial2 = serial2;
      this.price2 = price2;
    }
  }
  
  class Tablet2 extends Phone2 {
    constructor(name2, serial2, price2, size2 = "Unknown") {
      super(name2, serial2, price2);
      this.size2 = size2;
    }
  
    fullDetails2() {
      return `${this.name2} Serial is ${this.serial2} And Size Is ${this.size2}`;
    }
  }
  
  let TabletOne2 = new Tablet2("iPad", 100200300, 1500, 12.9);
  let TabletTwo2 = new Tablet2("Nokia", 350450650, 800, 10.5);
  let TabletThree2 = new Tablet2("LG", 250450650, 650);
  
  console.log(`${TabletOne2.fullDetails2()}`);
  console.log(`${TabletTwo2.fullDetails2()}`);
  console.log(`${TabletThree2.fullDetails2()}`);
  