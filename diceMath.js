var d4 = 4;
var d6 = 6;
var d8 = 8;
var d10 = 10;
var d12 = 12;
var d20 = 20;
var d100 = 100;
function rollD4(dice, numDice) {
    for (let x=0; x<numDice; x++){
        var min = 1;
        return Math.floor(Math.random() * (dice - min) + min);
    }
}
var roll20 = 
document.getElementById("roll").addEventListener("click", function() {
    var resolution = rollD4(21,1);
    document.getElementById("resolution").innerHTML = resolution;
  });