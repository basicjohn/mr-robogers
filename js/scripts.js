// Global Variables
let numberArray = []

// Business Logic
// count to input value & manipulate based on current value
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

    // loop to remove each of the previously input list items
    while (listOutput.lastElementChild) {
      listOutput.removeChild(listOutput.lastElementChild);
    }

    // call to run business logic function
    beepBoop(numberInput, name);

    // print each element in numberArray to the DOM
    numberArray.forEach(function (element){
      $("#listOutput").append("<li><span title=\"" + numberArrayPosition + "\" class=\"numberItem\">" + element + "</span></li>");
      numberArrayPosition += 1
    });

    // count from 0 to the input number and display it in the header
    function countUp() {
      $('.currentNumber').animate({
            Counter: numberInput
        }, {
            duration: 5000,
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