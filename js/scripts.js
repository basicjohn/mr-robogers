// Global Variables
let numberArray = []

// Business Logic
// Function to count up to input number and output differnt items for each
function beepBoop (number, name) {
  numberArray = []
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
    let numberInput = $("input#number").val();
    const name = $("input#firstName").val();
    let listOutput = document.getElementById('listOutput');
    let numberArrayPosition = 0;
    
    while (listOutput.lastElementChild) {
      listOutput.removeChild(listOutput.lastElementChild);
    }
    beepBoop(numberInput, name);

    // Print each element in numberArray to the DOM
    numberArray.forEach(function (element){
      $("#listOutput").append("<li><span title=\"" + numberArrayPosition + "\" class=\"numberItem\">" + element + "</span></li>");
      numberArrayPosition += 1
    });

    // Count from 0 to the input number and display it in the header
    function countUp() {
      $('.currentNumber').animate({
            Counter: numberInput
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            },
            complete: countUp
        });
    };
    countUp();
  });
});

