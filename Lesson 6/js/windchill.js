function getwindchill() {
var t = document.getElementById("t").innerText;
var s = document.getElementById("s").nodeValue;
var f = Windchill(t, s);

document.getElementById("WC").innerHTML = f;
}

function Windchill(t, s) {
var b = 35.74 + (0.6215 * t) - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16
var f = Math.round(10 * b) / 10;
return f;
}