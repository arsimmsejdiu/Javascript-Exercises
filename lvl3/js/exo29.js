let joursSemaine = [
  "jourImaginaire",
  "lundi",
  "mardi",
  "mercredi",
  "juedi",
  "vendredi",
  "samedi",
  "dimanche",
];

//Code à faire ici

for (i = 0; i < joursSemaine.length; i++) {
  if (joursSemaine[i] == "juedi") joursSemaine[i] = "jeudi";
}
joursSemaine.forEach( e => console.log(e) );