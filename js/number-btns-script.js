var increase1 = document.getElementById("increase-1");
var decrease1 = document.getElementById("decrease-1");
var tripLength = document.getElementById("trip-length");
var increase2 = document.getElementById("increase-2");
var decrease2 = document.getElementById("decrease-2");
var companions = document.getElementById("number-of-companions");

function add(tripLength) {

  event.preventDefault();

  var a = parseInt(tripLength.value);

  a = a + 1;

  tripLength.value = a;

};

function substract(tripLength) {

  event.preventDefault();

  var a = tripLength.value;

  if (a >= 2) {

  a = a - 1;

  tripLength.value = a;

  } else {

    a = 1;
  }

};


increase1.addEventListener("click", function(event) {

  add(tripLength);

});

decrease1.addEventListener("click", function(event) {

  substract(tripLength);

});

increase2.addEventListener("click", function(event) {

  add(companions);

});

decrease2.addEventListener("click", function(event) {

  substract(companions);

});