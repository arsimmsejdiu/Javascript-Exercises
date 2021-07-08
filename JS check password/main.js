const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");
const button = document.getElementById("button");
const alert = document.getElementById("alert");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  // Votre code ici
  if(password.value != checkPassword.value) {
    message.innerHTML =  "**Passwords dont match"
    return false;
  } else if (password.value = checkPassword.value) {
    message.innerHTML =  "**Passwords match";
    return false;
  } else if(password.value == "") {
    message.innerHTML =  "**Fill the password please!"
    return false;
  } else if(password.value > 15) {
    message.innerHTML =  "**Password length must not exceed 15 characters"
    return false;
  } else if(password.value < 8) {
    message.innerHTML =  "**Password length must be atleast 8 characters"
    return false;
  }
  return true
});
