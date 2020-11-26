/*const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=83f34cca04973e1329ea402e3d5dda64"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  });
*/
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    
    const towns = jsonObject['towns'];


    for (let i = 0; i < towns.length; i++) {

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

