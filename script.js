"use strict";
window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("setupReady");
  let selectedColor = document.querySelector("body > main > input[type=color]");
  selectedColor.addEventListener("change", addColor);
}

//show color and append to color
function addColor() {
  console.log(this.value);
  let color = document.querySelector(".color");
  let hex = document.querySelector(".hex");
  let rgb = document.querySelector(".rgb");
  let hsl = document.querySelector(".hsl");
  color.style.backgroundColor = this.value;
  hex.textContent = this.value;
  let values = this.value;
  let r, g, b;
  r = parseInt(values[1].toString() + values[2].toString(), 16);
  g = parseInt(values[3].toString() + values[4].toString(), 16);
  b = parseInt(values[5].toString() + values[6].toString(), 16);
  console.log(`rgb(${r}, ${g}, ${b})`);
  let rgbValue = `rgb(${r}, ${g}, ${b})`;
  rgb.textContent = rgbValue;
  hslmine(4, 3, b);
}
/* 
NOTE: hsl is not a function;
      Its pre-defined
 */

//show rgb
//show hsl

//algorithm
function hslmine(r, g, b) {
  /* let r;
let g;
let b; */
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  document.querySelector(".hsl").textContent = `hsl(${Math.round(
    h
  )}, ${Math.round(s)}, ${Math.round(l)})`;
}
