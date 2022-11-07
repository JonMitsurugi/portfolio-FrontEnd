var ES1 = !!(Array.prototype && Array.prototype.join),
ES3 = !!(Array.prototype && Array.prototype.pop),
ES51 = (function() {'use strict'; return !this; })(),
ES6 = !!Object.assign,
ES7 = !!(Array.prototype && Array.prototype.includes);

if (ES7) {
  console.log("El navegador contiene caracteristicas de EcmaScript 7");
} else if (ES6) {
  console.log("El navegador contiene caracteristicas de EcmaScript 6");
} else if (ES51) {
  console.log("El navegador contiene caracteristicas de EcmaScript 5.1");
} else if (ES3) {
  console.log("El navegador contiene caracteristicas de EcmaScript 3");
} else if (ES1) {
  console.log("El navegador contiene caracteristicas de EcmaScript 1");
} else {
  console.log("El navegador contiene caracteristicas de EcmaScript desconocido");
}

function pepe() {

  let newSection = document.createElement("section");

  let title = document.createElement("h2");
  let newContentTitle = document.createTextNode("Probando Sección");
  title.appendChild(newContentTitle);
  title.classList.add("text-center", "fs-2");

  let parrafo = document.createElement("p");
  let newContentParrafo = document.createTextNode("Hola que tal");
  parrafo.appendChild(newContentParrafo);
  parrafo.classList.add("col-lg-8", "offset-lg-2", "text-center", "lead", "w-lg-50")

  newSection.append(title, parrafo); //+ Con .append() se pueden agregar varios nodos al mismo tiempo.
// newSection.appendChild(title);
// newSection.appendChild(parrafo);
  newSection.classList.add("row","my-5")

  let parentElement = document.getElementById("parentElement");

  let currentDiv = document.getElementById("1");
  parentElement.insertBefore(newSection, currentDiv);
}

pepe();