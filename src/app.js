import "bootstrap";
import "./style.css";

const iconosTarjeta = ["♦", "♥", "♠", "♣"]
const numeroCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

let body = document.body

//Estilos del body
body.style.backgroundColor = "green";
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center"
//Hijos del Body
let childBody = body.children

//Div principal
let divPrincipal = document.createElement("DIV");
body.insertBefore(divPrincipal, childBody[0]);
//Estilos del divPrincipal
divPrincipal.style.width = "350px";
divPrincipal.style.height = "550px";
divPrincipal.style.borderRadius = "10px";
divPrincipal.style.margin = "0 auto";
divPrincipal.style.backgroundColor = "white";
divPrincipal.style.boxSizing = "border-box";
//Hijos del divPrincipal
let childDivPrincipal = divPrincipal.children;

//Div superior
let divSuperior = document.createElement("DIV");
divPrincipal.insertBefore(divSuperior, childDivPrincipal[0]);
//Estilos divSuperior
divSuperior.style.height = "33%";
divSuperior.style.padding = "0 20px";
divSuperior.style.boxSizing = "border-box";
divSuperior.style.fontSize = "110px";
divSuperior.style.lineHeight = "1"


//Div medio
let divMedio = document.createElement("DIV");
divPrincipal.insertBefore(divMedio, childDivPrincipal[1]);
//Estilos divMedio
divMedio.style.height = "33%";
divMedio.style.padding = "0";
divMedio.style.boxSizing = "border-box";
divMedio.style.display = "flex";
divMedio.style.alignItems = "center";
divMedio.style.justifyContent = "center";
divMedio.style.fontSize = "180px";
divMedio.style.marginBottom= "45px"
//Números en el divMedio
divMedio.innerHTML = numeroCarta[Math.floor(Math.random() * numeroCarta.length)];


//Div inferior
let divInferior = document.createElement("DIV");
divPrincipal.insertBefore(divInferior, childDivPrincipal[2]);
//Estilos divInferior
divInferior.style.height = "33%";
divInferior.style.padding = "0 20px"
divInferior.style.boxSizing = "border-box";
divInferior.style.display = "flex";
divInferior.style.alignItems = "end";
divInferior.style.justifyContent = "start";
divInferior.style.fontSize = "110px";
divInferior.style.transform = "rotate(180deg)";


// íconos aleatorios
function iconoRandom() {
  const icono = iconosTarjeta[Math.floor(Math.random() * iconosTarjeta.length)];
  let color = "black";
  if (icono === "♦" || icono === "♥") {
    color = "red";
  }
  return {
    icon: icono, color: color
  };
}

//Asignar íconos y color
const resultadoCarta = iconoRandom();
divSuperior.innerHTML = resultadoCarta.icon;
divSuperior.style.color = resultadoCarta.color;
divInferior.innerHTML = resultadoCarta.icon;
divInferior.style.color = resultadoCarta.color;
divMedio.style.color = resultadoCarta.color;