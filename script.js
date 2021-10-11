window.addEventListener("DOMContentLoaded",  start);

let currentColor = "white";

async function start() {
    let response = await fetch("resources/hat1-01.svg");
    let mySvgData = await response.text();
    document.querySelector(".section").innerHTML = mySvgData;

    document.querySelector("#crown").style.fill = currentColor;
   document.querySelector("#visor").style.fill = currentColor;

  document.querySelector("#crown path").addEventListener("click", changeColor);
  document.querySelector("#visor path").addEventListener("click", changeColor);
document.querySelector("#colors")
.addEventListener("click", changeCurrentColor);
}


function changeColor(e) {
    
e.target.style.fill = currentColor;
    console.log(currentColor);
    console.log(e.target);
}

function changeCurrentColor(e) {
const fillValue = e.target.getAttribute("fill");
currentColor =fillValue;
console.log(fillValue)

console.log(currentColor);

}