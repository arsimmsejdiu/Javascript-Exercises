const balance = document.getElementById("balanceIcon");
const battery = document.getElementById("battery");
const folder = document.getElementById("folder");
const starR = document.getElementById("star");
const glass = document.getElementById("glass");

function balanceScale() {
  balance.innerHTML = "&#xf24e;";
  setTimeout(function () {
    balance.innerHTML = "&#xf515;";
  }, 1000);
  setTimeout(function () {
    balance.innerHTML = "&#xf516;";
  }, 1000);
}

function glassB() {
  glass.innerHTML = "&#xf251;";
  setTimeout(function () {
    glass.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function () {
    glass.innerHTML = "&#xf253;";
  }, 2000);
}

function openFolder() {
  folder.innerHTML = "&#xf114;";
  setTimeout(function () {
    folder.innerHTML = "&#xf115;";
  }, 1000);
}

function star() {
  starR.innerHTML = "&#xf006;";
  setTimeout(function () {
    starR.innerHTML = "&#xf123;";
  }, 1000);
  setTimeout(function () {
    starR.innerHTML = "&#xf005;";
  }, 2000);
}

function batteryScale() {
  battery.innerHTML = "&#xf244;";
  setTimeout(function () {
    battery.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(function () {
    battery.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(function () {
    battery.innerHTML = "&#xf241;";
  }, 3000);
  setTimeout(function () {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}

balanceScale();
setInterval(balanceScale, 4000);

batteryScale();
setInterval(batteryScale, 4000);

openFolder();
setInterval(openFolder, 2000);

star();
setInterval(star, 4000);
glassB();
setInterval(glassB, 4000);
