console.log("SELECCIONAR POR ID");

let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

console.log(mainTitle.innerText);

mainTitle.innerText = "TITULO CAMBIADO";
console.log(mainTitle.innerText);

console.log("SELECCIONAR POR CLASE");

let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);

console.log(mainTexts[0].innerText);
console.log(mainTexts[2].innerText);

mainTexts[1].innerText = "lorem";

console.log("SELECCIONAR POR ETIQUETA");

let titles = document.getElementsByTagName("h2");
console.log(titles);
console.log(titles[2].innerText);

console.log("SELECCIONAR POR SINTAXIS CSS - QUERY SELECTOR");

let queryMainTitle = document.querySelectorAll("#main-title");
console.log(queryMainTitle);

let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);

console.log("EVENTOS")

document.getElementById("clicker").addEventListener
("click", function () {
    console.log("HAZ HECHO CLICK EN EL BOTON");
});
 
//silent teacher