// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

let englishFirst = L.featureGroup();
let nonEnglishFirst = L.featureGroup();

let layers = {
    "Speaks English First": englishFirst,
    "Doesn't Speak English First": nonEnglishFirst
};

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

let Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});
Stadia_AlidadeSmooth.addTo(map)

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// add layer control box
L.control.layers(null,layers).addTo(map);

function addMarker(data){
    if(data['Do you speak English fluently?'] == "Yes"){
        circleOptions.fillColor = "red"
        englishFirst.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>English First Language</h2>`))
        createButtons(data.lat,data.lng,data.Location)
    }
    else{
        circleOptions.fillColor="blue"
        nonEnglishFirst.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Non-English First Language</h2>`))
        createButtons(data.lat,data.lng,data.Location)
        // Bonus:    
        // nonEnglishSpeaker += 1
    }
    return data
};

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
};

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSchzwk5kOW1tV4RRe5bkhGOpYr9SjiatfgneZM3wo7PGkA7q7-0nt4xoIV_njJqLUWhMQI9POWTrfa/pub?output=csv"

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
};

// let nonEnglishSpeaker = 0
function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    englishFirst.addTo(map) // add our layers after markers have been made
    nonEnglishFirst.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([englishFirst,nonEnglishFirst]);
    map.fitBounds(allLayers.getBounds());
    //document.body.append("Number of hidden records:"+nonEnglishSpeaker)
};

loadData(dataUrl)
