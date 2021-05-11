//Code à faire ici
// 1)
var click = document.getElementById("clickOnMe");
click.addEventListener("click", function() {
    console.log("Cliquer sur le paragraphe d'id=\"clickOnMe\"")
});

// 2)
click.addEventListener("mouseover", function() {
    document.body.style.cursor = 'pointer'
})