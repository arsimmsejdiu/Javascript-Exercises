const message = document.getElementById("warning");
const input = document.getElementById("input");
const warning = document.getElementById("message");

input.addEventListener("keyup", function(event) {
    //⚠️ Caps Lock is activated...
    if (event.getModifierState('CapsLock')) {
        message.style.display = "block"
    } else {
        message.style.display = "none"
    }
});

input.addEventListener("keydown", function(event) {
     //⚠️ Caps Lock is activated...
     if (event.getModifierState('NumLock')) {
        warning.style.display = "block"
    } else {
        warning.style.display = "none"
    }
})

// input.addEventListener("keyup", function (event) {
//   //⚠️ Caps Lock is activated...
//   if (event.getModifierState("CapsLock")) {
//     if (event.getModifierState("NumLock")) {
//       warning.style.display = "block";
//     } else {
//       warning.style.display = "none";
//     }
//     message.style.display = "block";
//   } else {
//     message.style.display = "none";
//   }
// });
