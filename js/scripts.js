// Global Variables

let numberArray = []
let numberInt;

// Business Logic
function beepBoop (number, name) {
  numberInt = parseInt(number);
  console.log(numberInt, name);
  for (let i = 0; i <= numberInt; i += 1 ) {
    numberArray.push(i);
    console.log("this is the number array" + numberArray + "");

  }
  console.log("this is the number array" + numberArray + "");

}


// UI Logic
$(document).ready(function () {
  $("button#beautiful").click(function (event) {
    event.preventDefault();
    const numberInput = $("input#number").val();
    const name = $("input#firstName").val();
    beepBoop(numberInput, name);
    console.log(numberArray, name);

  });
});

