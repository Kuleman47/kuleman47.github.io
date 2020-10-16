var lastEdit = document.lastModified;
document.getElementById("lastModified").textContent = lastEdit;

function toggleMenu() {
    document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById("copyright-year").innerText = new Date().getFullYear();

function pancake() {
    var daynumber = new Date();

if (daynumber.getDay() == 5){
        document.getElementsByClassName("pancakes");

    document.querySelector(".pancakes").style.display = "block";
}
}