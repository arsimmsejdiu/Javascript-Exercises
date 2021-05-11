//Code à faire ici
// 1)
var changeText = document.querySelectorAll("#text")[0];
changeText.innerHTML = " Hello World !!! ";

// 2)
var html = document.querySelectorAll("#html")[0];
var text = "Je suis maintenant un paragraphe !";
html.innerHTML = "<p>" + text + "</p>"