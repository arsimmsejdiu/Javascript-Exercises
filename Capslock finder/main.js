const message = document.getElementById('warning');
const input = document.getElementById('input');

input.addEventListener("keyup", function(event) { 
    //⚠️ Caps Lock is activated...
    if (event.getModifierState('CapsLock')) {
        message.style.display = "block"
    } else {
        message.style.display = "none"
    }
});