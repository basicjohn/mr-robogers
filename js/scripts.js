// Global Variables
let numberArray = []

// Business Logic

// Function to count up to input number and output differnt items for each
function beepBoop (number, name) {
  let numberInt = parseInt(number);
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
    // Print each element in numberArray to the DOM
    numberArray.forEach(function (element){
      $("div#output .col-12 ul").append("<li><span class=\"numberItem\">" + element + "</span></li>");
    });
  });
});

