  //all the DOM elements we will need - ref from HTML
  const resultEl = document.getElementById("result");
  const lengthEl = document.getElementById("length");
    // checkboxes 
  const lowerEl = document.getElementById("lower");
  const upperEl = document.getElementById("upper");
  const numberEl = document.getElementById("number");
  const specialEl = document.getElementById("special");
  const generateEl = document.getElementById("generate");

//event addEventListener for checkboxes - set as booleans 
  generate.addEventListener("click", () => {
    var length = +lengthEl.value;
    var hasLower = lowerEl.checked ? true : false;
    var hasUpper = upperEl.checked ? true : false;
    var hasNumber = numberEl.checked ? true : false;
    var hasSpecial = specialEl.checked ? true : false;

    generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);
 
  });


  function  generatePassword(lower, upper, number, special, length) {
    if(length < 8){
      alert('Please select a valid length');
      return;
    } 

    var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz"; 
    var numberOptions = "0123456789"
    var specialOptions = "!@#£$%^&*()_+~`|}{[]\:;?><,./-="
 
   