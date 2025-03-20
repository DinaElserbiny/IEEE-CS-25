// تكلفه 1
// Test Case 1

/*
let num = 9; // "009"

// Test Case 2
let num = 20; // "020"

// Test Case 3
let num = 110; // "110"
*/
let num =110;
if(num<10)
{
 console.log(`00${num}`);
}

else if(num>10 && num<100)
{
    console.log(`0${num}`);
 
}
else if (num>=100)
{
    console.log(`${num}`);
}

//-----------------------------------------------

//تكلف 2
let num1 = 9;
let str = "9";
let str2 = "20";

//إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني
if(num1== (+str))
{
    console.log("{num1} Is The Same Value As {str}")
}
//إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني ولكن النوع مختلف

if ((num1== (+str)) &&(typeof num1 != typeof str))
{
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

//إذا كانت قيمة المتغير الأول ليست نفس قيمة المتغير الثالث وليست ايضا نفس النوع
if((num1 !== (+str2)) && (typeof num1 !== typeof str2))
{
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}

// إذا كانت قيمة المتغير الثاني لا تساوي المتغير الثالث ولكنهم نفس النوع
if((str !== str2 ) && (typeof str == typeof str2))
{
     console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}

//----------------------------------------------------------------------------------------------------------

// تكلفه 3
let num11 = 10;
let num12 = 30;
let num13 = "30";

// تأكد أن المتغير الثالث أكبر من الأول ولا يساوي الثاني في النوع
    if (num13 > num11 &&  num13 !==  num12) {
      console.log(`${num13} Is Larger Than ${num11} And Type ${typeof num13} Not The Same Type As ${typeof num11}`);
    }

    // المتغير الثالث أكبر من الأول ومساوي للثاني في القيمة ولا يساوي الثاني في النوع
    if(num13 > num11  &&  num13 == num12 &&  num13 !== num12)
    {
        console.log(`${num13} Is Larger Than ${num11} And Value Is The Same As ${num12} And Type ${typeof num13} Not The Same Type As ${typeof num12}`);
    }

    // قيمة المتغير الثالث لا تساوي الأول من ناحية القيمة والنوع ولا تساوي الثاني من ناحية النوع
    if (num13 !== num11 && num13 !==  num12) {
        console.log(`${num13} Value And Type Is Not The Same As ${num11} And Type Is Not The Same As ${num12}`);
      }
      
//--------------------------------------------------------------------------------------------------------------------------------------------


//تكلفه 4
// Edit What You Want Here

let num111 = 10;
let num112 = 5;
let num113 = 10;
let num114 = 36;


// Condition 1

if (num111 > num112) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num111 > num112 && num111 < num114) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num111 > num112 && num111 === num113) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num111 + num112) < num114) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num111 + num113) < num114) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num111 + num112 + num113) < num114) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num114 - (num111 + num113) + num112 === 21) {
  console.log("True");
} else {
  console.log("False");
}     

