// Global Variables
let numberArray = []
let numberInt;

// Business Logic
function beepBoop (number, name) {
  numberInt = parseInt(number);
  console.log(numberInt, name);
  for (let i = 0; i <= numberInt; i += 1 ) {
    let digits = [...`${i}`];
    if (digits.includes("3")) {
      numberArray.push("Won't you be my neighbor, " + name + "?");
    } else if (digits.includes("2")) {
      numberArray.push("Boop");
    } else if (digits.includes("1")) {
      numberArray.push("Beep");
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
    console.log(numberArray);

  });
});

