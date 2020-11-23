

function getwindchill() {
    let t = parseFloat(document.getElementById('t').textContent);
    let s = parseFloat(document.getElementById("s").textContent);
    var f = Windchill(t, s);
    
    }
    
    function Windchill(t, s) {
    var b = 35.74 + (0.6215 * t) - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    var f = Math.round(10 * b) / 10;
    var na = "N/A"
    if (t <= 50 && s >= 3) {
        document.getElementsByClassName("WC").innerHTML = "Wind Chill: " + f
    }
    else {
        document.getElementsByClassName("WC").innerHTML = "Wind Chill: " + na;
    }
    }