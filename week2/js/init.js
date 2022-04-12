console.log('Hello Asian Am 191! :)');

// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 10); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker

function my_first_function(){
    console.log('hi from function')
}

function add_marker(lat, lng, popup, image){
    L.circleMarker([lat, lng]).addTo(map) 
    .bindPopup(popup,image);
}

add_marker(34.120320, -118.256430, "<h2>Kitten Rescue</h2>")
add_marker(34.044750, -118.442680, "<h2>Best Friends West LA Pet Adoption Center (NKLA)</h2>")
add_marker(33.852280, -118.138120, "<h2>Found Animals Adopt & Shop Lakewood</h2>")
add_marker(33.8572131, -117.9260034, "<h2>Cats in Need Fullerton</h2>")






//Lab 2 map: cat rescues/orgs i have volunteered/associated with! 