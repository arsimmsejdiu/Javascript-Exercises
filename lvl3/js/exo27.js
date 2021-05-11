//Code à faire ici

function random() {
  var number = Math.floor(Math.random() * 11);
  console.log("The number is: " + number);
  if (number >= 4 && number <= 6) {
    return true;
  } else {
    return false;
  }
}

console.log(random());
