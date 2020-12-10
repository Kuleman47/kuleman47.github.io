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