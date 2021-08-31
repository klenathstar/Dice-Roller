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
document.getElementById("roll20").addEventListener("click", function() {
    var resolution = rollD4(21,1);
    document.getElementById("resolution").innerHTML = resolution;
  });
  document.getElementById("roll12").addEventListener("click", function() {
    var resolution = rollD4(13,1);
    document.getElementById("resolution").innerHTML = resolution;
  });
  document.getElementById("roll10").addEventListener("click", function() {
    var resolution = rollD4(11,1);
    document.getElementById("resolution").innerHTML = resolution;
  });
  document.getElementById("roll8").addEventListener("click", function() {
    var resolution = rollD4(9,1);
    document.getElementById("resolution").innerHTML = resolution;
  });
  document.getElementById("roll6").addEventListener("click", function() {
    var resolution = rollD4(7,1);
    document.getElementById("resolution").innerHTML = resolution;
  });
  document.getElementById("roll4").addEventListener("click", function() {
    var resolution = rollD4(5,1);
    document.getElementById("resolution").innerHTML = resolution;
  });