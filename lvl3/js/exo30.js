let number = 15;
let text = "Je suis un texte";
let bool = false;

//Code à faire ici, on attend plus que typeof !

function typeOf(obj) {
    return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

console.log(typeOf(number));
console.log(typeOf(text));
console.log(typeOf(bool));