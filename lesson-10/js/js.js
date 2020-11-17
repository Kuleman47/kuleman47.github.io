const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    
    const towns = jsonObject['towns'];


    for (let i = 0; i < towns.length; i++) {

  //  const townname = towns.filter(x => (x.name == "Preston, Soda Springs, Fish Haven"));
  if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let motto = document.createElement('p');
    let year = document.createElement('p');
    let population = document.createElement('p');
    let rain = document.createElement('p');

    h2.textContent = towns[i].name;
    image.setAttribute('src', 'images/' + towns[i].photo);
    image.setAttribute('alt', towns[i].name);
    motto.textContent = "Town motto: " + towns[i].motto;
    year.textContent = "Year founded: " + towns[i].yearFounded;
    population.textContent = "Population: " + towns[i].currentPopulation;
    rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall + " inches";


    card.appendChild(h2);
    card.appendChild(motto);
    card.appendChild(year);
    card.appendChild(population);
    card.appendChild(rain);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
  }
}
});




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