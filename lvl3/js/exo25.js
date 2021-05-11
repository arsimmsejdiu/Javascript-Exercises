//Code à faire ici

var button = document.querySelector('input[type=submit]').addEventListener("click", function(event) {
    event.preventDefault();
})

var input = document.querySelector("input[type=text]");
input.addEventListener("click", function(){
    console.log(input.value + "tt");
    if(input.value == "") {
        console.log("Text vide")
    } else {
        console.log("Text non vide");
    }
})
