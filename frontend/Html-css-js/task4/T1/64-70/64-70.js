// تكلفه 1
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      let parts = zName.split(" ");
      return `${parts[0]} ${parts[1][0].toUpperCase()}.`;
    }
    
    function ageWithMessage(zAge) {
      let age = zAge.split(" ");
      return `Your Age Is ${age[0]}`;
    }
    
    function countryTwoLetters(zCountry) {
      return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    }
    
    function fullDetails() {
      return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }
    
    return fullDetails();
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
  
  //----------------------------------------------------------------------------------------------------------

  //تكلفه 2
  let  itsMe=()=> `Iam A Normal Function`;
  console.log(itsMe()); // Iam A Normal Function

  let urlCreate= (protocol, web, tld) =>  `${protocol}://www.${web}.${tld}`;

  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
//------------------------------------------------------------------------------------------------------------------------------
  //تكلفه 3
  const checker = (zName) => (status) => (salary) => 
    status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
  //------------------------------------------------------------------------------------------------------------------------------

  // تكلفه 4
  function specialMix(...data) {
    let sum = 0;
    let hasNumbers = false;
  
    for (let item of data) {
      let num = parseInt(item);
      if (!isNaN(num)) {
        sum += num;
        hasNumbers = true;
      }
    }
    
    return hasNumbers ? sum : "All Is Strings";
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
  