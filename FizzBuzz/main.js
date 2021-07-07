const fizz = document.getElementById("fizz");
var display;

function Fizz() {
  for (let i = 0; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

function FizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizz.innerHTML += "<div>FizzBuzz</div>";
    } else if (i % 3 === 0) {
      fizz.innerHTML += "<div>Fizz</div>";
    } else if (i % 5 === 0) {
      fizz.innerHTML += "<div>Buzz</div>";
    } else {
      fizz.innerHTML += "<div>" + i + "</div>";
    }
  }
}

Fizz();
FizzBuzz();

// if(i % 15 == 0) fizzBuzz.innerHTML = "FizzBuzz";
//         else if(i % 3 == 0) fizzBuzz.innerHTML = 'Fizz';
//         else if (i % 5 == 0) fizzBuzz.innerHTML = 'Buzz';
//         else fizzBuzz.innerHTML = i;
