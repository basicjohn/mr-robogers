// Business Logic

function beepBoop (number, name) {
number = parseInt(number);
console.log(number, name);
}


// UI Logic
$(document).ready(function () {
  $("button#beautiful").click(function (event) {
    event.preventDefault();
    const numberInput = $("input#number").val();
    const name = $("input#firstName").val();
    beepBoop(numberInput, name);
    console.log(numberInput, name);

  });
});

