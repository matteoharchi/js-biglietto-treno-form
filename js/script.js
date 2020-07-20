// VARIABILI
var prezzokm = 0.21;
var km = document.getElementById('km').value;
var name = document.getElementById("name").value;
var scontominori = 0.80;
var scontosenior = 0.60;
var prezzo = km*0.21;
var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");
var categoria = "Tariffa standard";
// BUTTONS

genera.addEventListener("click",
  function(){
    document.getElementById("section-title").className = "show";
    document.getElementById("ticket").className = "show";
    var nome = document.getElementById("name").value;
    document.getElementById("passenger").innerHTML = name;
    var carrozza = generaRandom(1,10);
    var codice = generaRandom(90000, 100000);
    document.getElementById("offerta").innerHTML = categoria;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("codice").innerHTML = codice;
    document.getElementById("prezzo").innerHTML = prezzo;

  }
);
annulla.addEventListener("click",
  function(){
    document.getElementById("ticket").className = "hidden";
  }
);

// DATI

function generaRandom(min, max){
  return Math.floor(Math.random()*(max-min)+min);
}
var eta = document.getElementById("categoria-prezzo").value;
if (eta == "minorenne") {
  prezzo -= prezzo * 0.20;
  categoria = "Tariffa ragazzi";
} else if (eta == "over65") {
  prezzo -= prezzo * 0.40;
  categoria = "Tariffa Senior";
}
