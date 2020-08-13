/*De functie om de content aan te passen aan op welke knop gedrukt wordt.
Wel niet de snelste manier en redelijk omslachtig... want Isotope had laadproblemen...*/

let categorieKnop = document.getElementsByClassName("button");
let teller = 0;
while (teller < categorieKnop.length) {
  console.log("de loop werkt!");
  categorieKnop[teller].addEventListener("click", toonItems);
  teller++;
}

categorieKnop[0].classList.add("actief"); /*Start*/

let afbeeldingGrid = document.getElementsByClassName("grid")[0];
let gdItems = document.getElementsByClassName("GD")[0];
let aeItems = document.getElementsByClassName("AE")[0];
let c4dItems = document.getElementsByClassName("C4D")[0];
let psdItems = document.getElementsByClassName("PSD")[0];
let aiItems = document.getElementsByClassName("AI")[0];
let idItems = document.getElementsByClassName("ID")[0];

function toonItems() {
  console.log("toonItems werkt!");
  if (this.innerHTML === "Alle") {
    categorieKnop[0].classList.add("actief");
    categorieKnop[1].classList.remove("actief");
    categorieKnop[2].classList.remove("actief");
    categorieKnop[3].classList.remove("actief");
    categorieKnop[4].classList.remove("actief");
    categorieKnop[5].classList.remove("actief");
    categorieKnop[6].classList.remove("actief");
    gdItems.classList.remove("verborgen");
    aeItems.classList.remove("verborgen");
    c4dItems.classList.remove("verborgen");
    psdItems.classList.remove("verborgen");
    aiItems.classList.remove("verborgen");
    idItems.classList.remove("verborgen");
  } else if (this.innerHTML === "Grafisch Design") {
    categorieKnop[0].classList.remove("actief");
    categorieKnop[1].classList.add("actief");
    categorieKnop[2].classList.remove("actief");
    categorieKnop[3].classList.remove("actief");
    categorieKnop[4].classList.remove("actief");
    categorieKnop[5].classList.remove("actief");
    categorieKnop[6].classList.remove("actief");
    gdItems.classList.remove("verborgen");
    aeItems.classList.add("verborgen");
    c4dItems.classList.add("verborgen");
    psdItems.classList.add("verborgen");
    aiItems.classList.add("verborgen");
    idItems.classList.add("verborgen");
  } else if (this.innerHTML === "After Effects") {
    categorieKnop[0].classList.remove("actief");
    categorieKnop[1].classList.remove("actief");
    categorieKnop[2].classList.add("actief");
    categorieKnop[3].classList.remove("actief");
    categorieKnop[4].classList.remove("actief");
    categorieKnop[5].classList.remove("actief");
    categorieKnop[6].classList.remove("actief");
    gdItems.classList.add("verborgen");
    aeItems.classList.remove("verborgen");
    c4dItems.classList.add("verborgen");
    psdItems.classList.add("verborgen");
    aiItems.classList.add("verborgen");
    idItems.classList.add("verborgen");
  } else if (this.innerHTML === "Cinema 4D") {
    categorieKnop[0].classList.remove("actief");
    categorieKnop[1].classList.remove("actief");
    categorieKnop[2].classList.remove("actief");
    categorieKnop[3].classList.add("actief");
    categorieKnop[4].classList.remove("actief");
    categorieKnop[5].classList.remove("actief");
    categorieKnop[6].classList.remove("actief");
    gdItems.classList.add("verborgen");
    aeItems.classList.add("verborgen");
    c4dItems.classList.remove("verborgen");
    psdItems.classList.add("verborgen");
    aiItems.classList.add("verborgen");
    idItems.classList.add("verborgen");
  } else if (this.innerHTML === "Photoshop") {
    categorieKnop[0].classList.remove("actief");
    categorieKnop[1].classList.remove("actief");
    categorieKnop[2].classList.remove("actief");
    categorieKnop[3].classList.remove("actief");
    categorieKnop[4].classList.add("actief");
    categorieKnop[5].classList.remove("actief");
    categorieKnop[6].classList.remove("actief");
    gdItems.classList.add("verborgen");
    aeItems.classList.add("verborgen");
    c4dItems.classList.add("verborgen");
    psdItems.classList.remove("verborgen");
    aiItems.classList.add("verborgen");
    idItems.classList.add("verborgen");
  } else if (this.innerHTML === "Illustrator") {
    categorieKnop[0].classList.remove("actief");
    categorieKnop[1].classList.remove("actief");
    categorieKnop[2].classList.remove("actief");
    categorieKnop[3].classList.remove("actief");
    categorieKnop[4].classList.remove("actief");
    categorieKnop[5].classList.add("actief");
    categorieKnop[6].classList.remove("actief");
    gdItems.classList.add("verborgen");
    aeItems.classList.add("verborgen");
    c4dItems.classList.add("verborgen");
    psdItems.classList.add("verborgen");
    aiItems.classList.remove("verborgen");
    idItems.classList.add("verborgen");
  } else if (this.innerHTML === "Indesign") {
    categorieKnop[0].classList.remove("actief");
    categorieKnop[1].classList.remove("actief");
    categorieKnop[2].classList.remove("actief");
    categorieKnop[3].classList.remove("actief");
    categorieKnop[4].classList.remove("actief");
    categorieKnop[5].classList.remove("actief");
    categorieKnop[6].classList.add("actief");
    gdItems.classList.add("verborgen");
    aeItems.classList.add("verborgen");
    c4dItems.classList.add("verborgen");
    psdItems.classList.add("verborgen");
    aiItems.classList.add("verborgen");
    idItems.classList.remove("verborgen");
  }
}

function actieveButton(){
  this.classList.add("actief");
}

function inactieveButton(){
  this.classList.remove("actief");
}
