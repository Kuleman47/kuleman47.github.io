const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById("copyright-year").innerText = new Date().getFullYear();

var lastEdit = document.lastModified;
document.getElementById("lastModified").textContent = lastEdit;


fetch("data/data.json")
.then(function (response) {
    return response.json();
    
})
.then(function (JSONOBJECT) {

    const vehicles = JSONOBJECT['vehicles'];

    for (let i = 0; i < vehicles.length; i++) {
        
        let table = document.createElement('table');
        let h2 = document.createElement('h2');
        let person = document.createElement('p');
        let reservationhalf = document.createElement('p');
        let reservationfull = document.createElement('p');
        let walkinhalf = document.createElement('p');
        let walkinfull = document.createElement('p');
        let image = document.createElement('img');
        
        h2.textContent = vehicles[i].vehicle;
        person.textContent = "Max persons: " + vehicles[i].person;
        reservationhalf.textContent = "Reservation Half Day: " + vehicles[i].reservationhalfday;
        reservationfull.textContent = "Reservation Full Day: " + vehicles[i].reservationfullday;
        walkinhalf.textContent = "Walk-in Half Day: " + vehicles[i].walkinhalfday;
        walkinfull.textContent = "Walk-in Full Day: " + vehicles[i].walkinfullday;
        image.setAttribute('src', 'images/' + vehicles[i].image);
        image.setAttribute('alt', vehicles[i].vehicle);
    
        table.appendChild(h2);
        table.appendChild(person);
        table.appendChild(reservationhalf);
        table.appendChild(reservationfull);
        table.appendChild(walkinhalf);
        table.appendChild(walkinfull);
        table.appendChild(image);
    
        document.querySelector('table.rentaltable').appendChild(table);
      }
});

function toggleMenu() {
    document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

const APIWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.4230&lon=-86.9223&exclude=hourly,daily&appid=83f34cca04973e1329ea402e3d5dda64'

fetch(APIWeather)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    const current = jsObject['current']
    let section = document.createElement('section');
    let temperature = document.createElement('p');
    let humidity = document.createElement('p');
    let description = document.createElement('p');
    let feelslike = document.createElement('p');

    temperature.textContent = "Current Temperature:  " + current.temp;
    humidity.textContent = "Current Humidity:  " + current.humidity;
    feelslike.textContent = "Currently Feels Like:  " + current.feels_like;
    description.textContent = "Current Description of Weather:  " + current.weather[0].description;

    section.appendChild(temperature);
    section.appendChild(humidity);
    section.appendChild(feelslike);
    section.appendChild(description);

document.querySelector('div.weather').appendChild(section);


});