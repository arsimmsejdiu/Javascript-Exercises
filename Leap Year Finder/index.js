function hello() {
  var year = document.getElementById("leapInput").value;
  //get the value from input - document.getElementById("leapInput").value
  if (year % 4 === 0) {
    if (year % 100 === 0){
       if (year % 400 == 0){
        document.getElementById("leap").innerHTML = "Yes, This Is A Leap Year";
        console.log(year + " Is A Leap Year");
       } else {
        document.getElementById("leap").innerHTML = "No, This Is not A Leap Year";
        console.log(year + " Is not A Leap Year");
       }
    } else {
        document.getElementById("leap").innerHTML = "Yes, This Is A Leap Year";
        console.log(year + " Is A Leap Year");
    }
 } else{
    document.getElementById("leap").innerHTML = "No, This Is not A Leap Year";
    console.log(year + " Is not A Leap Year");
 }
}


