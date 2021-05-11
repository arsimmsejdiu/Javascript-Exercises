let reservedWords = ["var", "let", "const"];

//Code à faire ici
console.log(typeof reservedWords[0]);
console.log(typeof reservedWords[1]);
console.log(typeof reservedWords[2]);

console.log(reservedWords[0] + " les déclarations ont une portée globale ou une portée de fonction while " + reservedWords[1] + " et une " + reservedWords[2] + " portée de bloc.");
console.log(reservedWords[0] + " les variables peuvent être mises à jour et re-déclarées dans son champ d'application; " + reservedWords[1] + " les variables peuvent être mises à jour mais pas re-déclarées; " + reservedWords[2] + " les variables ne peuvent être ni mises à jour ni re-déclarées.")
console.log("Ils sont tous hissés au sommet de leur lunette. Mais alors que les " + reservedWords[0] + " variables sont initialisées avec undefined, " + reservedWords[1] + " et que les " + reservedWords[2] + " variables ne sont pas initialisées.")
console.log("Alors que " + reservedWords[0] + " et " + reservedWords[1] + " peut être déclaré sans être initialisé, il " + reservedWords[2] + " doit être initialisé lors de la déclaration.")
