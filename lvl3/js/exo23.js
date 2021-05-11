//Code à faire ici
var toggle = document.getElementById("toggle");
toggle.addEventListener("click", function() {
    toggle.classList.toggle('toggle');
})

toggle.addEventListener("mouseover", function() {
    document.body.style.cursor = "pointer"
})