// Global Variables

let numberArray = []
let numberInt;

// Business Logic
function beepBoop (number, name) {
  numberInt = parseInt(number);
  console.log(numberInt, name);
  for (let i = 0; i <= numberInt; i += 1 ) {
    if ("3".includes(i)) {
      numberArray.push("Won't you be my neighbor?");
    } else if ("2".includes(i)) {
      numberArray.push("Boop");
    } else {
    numberArray.push(i);
    } 
  }
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

