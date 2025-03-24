//تكلفه 1
function sayHello(theName, theGender) {
 
    if(theGender=="Male")
    {
        console.log(` Hello Mr ${theName}`);
    }
    else if(theGender=="Female")
    {
        console.log(` Hello Miss  ${theName}`);
    }
    else{
        console.log(` Hello ${theName}`);
    }
}

  // Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//-------------------------------------------------------------------------

//تكلفه 2
function calculate(firstNum, secondNum, operation='add')
 {
    if (firstNum === undefined) {
        return "First Number Not Found";
    }
   else if (secondNum === undefined) 
    {
        return "Second Number Not Found";
    }
   else if(operation ==='add' )
    {
        return firstNum + secondNum;
    }
    else if(operation ==='subtract')
    {
        return firstNum - secondNum ;
    }
    else if(operation ==='multiply')
    {
        return firstNum * secondNum ;
    }
   
}

// Needed Output

console.log(calculate(20)); // "Second Number Not Found"
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, 'add')); // 50
console.log(calculate(20, 30, 'subtract')); // -10
console.log(calculate(20, 30, 'multiply')); // 600

//------------------------------------------------------------------------------------------------

//تكلفه 3
function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100 )
    {
    console.log("Age out of range");
    }
    
    else 
    {
        let months =theAge * 12;
        let weeks = months * 4; 
        let days = weeks * 7;
        let hours = days * 24;
        let minutes = hours*60;
        let sec= minutes * 60;

        console.log(months + " month");
        console.log(weeks + " weeks");
        console.log(days + " days");
        console.log(hours + " hours");
        console.log(minutes + " minutes");
        console.log(sec + " seconds");

    }
}
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

  //-----------------------------------------------------------------------------------------------

  //تكلفه 4
  function checkStatus(a, b, c) {
    let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
    let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
    let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

    let availability = status ? "You Are Available For Hire" : "You Are Not Available For Hire";

    console.log(`Hello ${name}, Your Age Is ${age}, ${availability}`);
}
    
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

  //------------------------------------------------------------------------------------------------------------------------------
  // 5تكلفه 
  function createSelectBox1(startYear, endYear) {
    document.write('<select>'); 
    
    for (let year = startYear; year <= endYear; year++) {
        document.write(`<option value="${year}">${year}</option>`); 
    }
    
    document.write('</select>');
}
createSelectBox1(2000, 2021);

//anther solution

function createSelectBox2(startYear, endYear) {
    let select = document.createElement("select"); 

    for (let year = startYear; year <= endYear; year++) {
        let option = document.createElement("option"); // إنشاء عنصر Option
        option.value = year; 
        option.textContent = year;
        select.appendChild(option); 
    }

    document.body.appendChild(select); 
}
createSelectBox2(2000, 2021);

//--------------------------------------------------------------------------------------------------------
//تكلفه 6
function multiply_fun(...args) {
    let result = 1;

    for (let arg of args) {
        if (typeof arg === "number") {
            let num = Number.isInteger(arg) ? arg : Math.floor(arg); 
            result *= num;
         
        }
    }

    return  result ;
}

console.log(multiply_fun(10, 20)); // 200
console.log(multiply_fun("A", 10, 30)); // 300
console.log(multiply_fun(100.5, 10, "B")); // 1000
console.log(multiply_fun(5.9, "X", 2.8)); // 10
//--------------------------------------