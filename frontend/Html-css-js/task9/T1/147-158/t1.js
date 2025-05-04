// تكلفه 1
class Car1 {
    constructor(name1, model1, price1) {
      this.n1 = name1;
      this.m1 = model1;
      this.p1 = price1;
    }
  
    run1() {
      console.log("Car Is Running Now");
    }
  
    stop1() {
      console.log("Car Is Stopped");
    }
  }
  
  let carOne1 = new Car1("MG", "2022", 420000);
  let carTwo1 = new Car1("BMW", "2023", 990000);
  let carThree1 = new Car1("KIA", "2020", 360000);
  
  console.log(`Car One Name Is ${carOne1.n1} And Model Is ${carOne1.m1} And Price Is ${carOne1.p1}`);
  carOne1.run1();

  //----------------------------------

 