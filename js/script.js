// nome passeggero
var name = prompt("Come si chiama?");
var infoName = "Gentile, " + name;
document.getElementById("html-name").innerHTML = infoName;
// età passeggero
var age;
  age = parseInt(prompt("Quanti anni ha?"));
while (isNaN  (age)){
  age = prompt("Ops, hai sbagliato qualcosa! Riprova");
}

var infoAge = "Età: " + age;
var min, max, standard ;

if (age < 18) {
  infoAge = min = "Non sei ancora maggiorenne! Hai quindi diritto ad uno sconto del 20%!!"
} else if (age >=65) {
  infoAge = max = "Sei più che maggiorenne! Hai quindi diritto ad uno sconto del 40%!!"
} else {
  infoAge = standard = ""
}
document.getElementById("html-age").innerHTML = infoAge;


// destinazione
var city = prompt("Dove vuole andare?");
var infoCity = "Destinazione: " + city;
document.getElementById("html-city").innerHTML = infoCity;

// numero km
var km
  km = parseInt(prompt("Quanti km sono?"))
while (isNaN(km)){
  km = prompt("Ops, hai sbagliato qualcosa! Riprova");
}

var infoKm = "Km: " + km;
document.getElementById("html-km").innerHTML = infoKm;