var person = prompt("What is your name?");
console.log("Hey " + person);

const WinningNumber = Math.floor(Math.random() * 26);

var number = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");

for(i = 1; number != WinningNumber && i <5; i++) {
  console.log("Dat is niet correct");
  console.log("Je hebt nog " + (5 - i) +" kansen om het raden")
  var number = prompt("Voer een nummer in van 0 tot 25 ...");
};
if (number !== WinningNumber) {
  console.log("Helaas, game over...")
} else {
  console.log("Gefeliciteerd je hebt gewonnen")
};

console.log("Dag " + person + ", tot de volgende keer!")