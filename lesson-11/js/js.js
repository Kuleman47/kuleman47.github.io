const prestonURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=83f34cca04973e1329ea402e3d5dda64"
const sodaspringsURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=83f34cca04973e1329ea402e3d5dda64"
const fishhavenURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=83f34cca04973e1329ea402e3d5dda64"


fetch(prestonURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
    document.getElementById('t').textContent = jsObject.main.temp;
    document.getElementById('h').textContent = jsObject.main.humidity;
    document.getElementById('s').textContent = jsObject.wind.speed;
    document.getElementById('currently').textContent = jsObject.weather[0].description;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
const desc = jsObject.weather[0].description;
document.getElementById('imagesrc').textContent = imagesrc; 
document.getElementById('icon').setAttribute('src', imagesrc);  
document.getElementById('icon').setAttribute('alt', desc);

  });

  fetch(sodaspringsURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
    document.getElementById('st').textContent = jsObject.main.temp;
    document.getElementById('sh').textContent = jsObject.main.humidity;
    document.getElementById('ss').textContent = jsObject.wind.speed;
    document.getElementById('scurrently').textContent = jsObject.weather[0].description;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
const desc = jsObject.weather[0].description;
document.getElementById('imagesrc').textContent = imagesrc; 
document.getElementById('icon').setAttribute('src', imagesrc);  
document.getElementById('icon').setAttribute('alt', desc);

  });

  fetch(fishhavenURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
    document.getElementById('ft').textContent = jsObject.main.temp;
    document.getElementById('fh').textContent = jsObject.main.humidity;
    document.getElementById('fs').textContent = jsObject.wind.speed;
    document.getElementById('fcurrently').textContent = jsObject.weather[0].description;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
const desc = jsObject.weather[0].description;
document.getElementById('imagesrc').textContent = imagesrc; 
document.getElementById('icon').setAttribute('src', imagesrc);  
document.getElementById('icon').setAttribute('alt', desc);

  });

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=83f34cca04973e1329ea402e3d5dda64"
const sodaspringsapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=83f34cca04973e1329ea402e3d5dda64"
const fishhavenapiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=83f34cca04973e1329ea402e3d5dda64"

fetch(apiURL)
.then(response => response.json())
.then((jsobject) => {
    console.log(jsobject);
    const forecast = jsobject.list.filter(y => y.dt_txt.includes('18:00:00'));
    console.log(forecast);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < forecast.length; i++ ) {
        
    const date = new Date(forecast[i].dt_txt);
    let card = document.createElement('table');
    let days = document.createElement('h3');
    let imagine = document.createElement('img');    
    let temps = document.createElement('h3');



    days.textContent = weekdays[date.getDay()];
    imagine.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png');
    imagine.setAttribute('alt', forecast[i].weather[0].description);
    temps.textContent = forecast[i].main.temp;

    card.appendChild(days);
    card.appendChild(imagine);
    card.appendChild(temps);
 
    document.querySelector('table.fivedaycast').appendChild(card);
    }
});

fetch(sodaspringsapiURL)
.then(response => response.json())
.then((sjsobject) => {
    const sodaforecast = sjsobject.list.filter(y => y.dt_txt.includes('18:00:00'));
    console.log(sodaforecast);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < sodaforecast.length; i++ ) {
        
    const date = new Date(sodaforecast[i].dt_txt);
    let card = document.createElement('table');
    let days = document.createElement('h3');
    let imagine = document.createElement('img');    
    let temps = document.createElement('h3');



    days.textContent = weekdays[date.getDay()];
    imagine.setAttribute('src', 'https://openweathermap.org/img/w/' + sodaforecast[i].weather[0].icon + '.png');
    imagine.setAttribute('alt', sodaforecast[i].weather[0].description);
    temps.textContent = sodaforecast[i].main.temp;

    card.appendChild(days);
    card.appendChild(imagine);
    card.appendChild(temps);
 
    document.querySelector('table.sodafivedaycast').appendChild(card);
    }
});

fetch(fishhavenapiURL)
.then(response => response.json())
.then((jsobject) => {
    console.log(jsobject);
    const forecast = jsobject.list.filter(y => y.dt_txt.includes('18:00:00'));
    console.log(forecast);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < forecast.length; i++ ) {
        
    const date = new Date(forecast[i].dt_txt);
    let card = document.createElement('table');
    let days = document.createElement('h3');
    let imagine = document.createElement('img');    
    let temps = document.createElement('h3');



    days.textContent = weekdays[date.getDay()];
    imagine.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png');
    imagine.setAttribute('alt', forecast[i].weather[0].description);
    temps.textContent = forecast[i].main.temp;

    card.appendChild(days);
    card.appendChild(imagine);
    card.appendChild(temps);
 
    document.querySelector('table.fishfivedaycast').appendChild(card);
    }
});

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

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    
    const towns = jsonObject['towns'];


    for (let i = 0; i < towns.length; i++) {

  if (towns[i].name == "Preston") {
   let tavo = document.createElement('div');
   let pp = document.createElement('p');

   pp.textContent = towns[i].events;

   tavo.appendChild(pp);

   document.querySelector('div.prestonevents').appendChild(tavo);
  }
    }
  });

  fetch(requestURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject) {
      
      const towns = jsonObject['towns'];
  
  
      for (let i = 0; i < towns.length; i++) {

  if (towns[i].name == "Fish Haven") {
    let event = document.createElement('div');
    let fhp = document.createElement('p');
 
    fhp.textContent = towns[i].events;
 
    event.appendChild(fhp);
 
    document.querySelector('div.events').appendChild(event);
   } 

} 
});

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    
    const towns = jsonObject['towns'];


    for (let i = 0; i < towns.length; i++) {

if (towns[i].name == "Soda Springs") {
  let events = document.createElement('div');
  let ssp = document.createElement('p');

  ssp.textContent = towns[i].events;

  events.appendChild(ssp);

  document.querySelector('div.sodaevent').appendChild(events);
 } 

} 
});




let imagestoLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
};

const imageOptionss = {
    threshold:0.5
};

if("IntersectionObserver" in window){
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) =>{
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imageOptionss);
    imagestoLoad.forEach((img) =>{
        imgObserver.observe(img);
    });
}

else 
imagestoLoad.forEach((img) => {
        loadImages(img);
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