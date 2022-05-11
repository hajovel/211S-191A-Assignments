// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':10}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.circleMarker([lat,lng], {"radius":8, 
                                "color": "#4f4645", 
                                "weight":3, 
                                "opacity":3}).addTo(map).
                                bindPopup(`<h3>${title}</h3> <p>${message}</p>`) 
    createButtons(lat,lng,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton); 
}

addMarker(34.120320, -118.256430, "<h3>Kitten Rescue</h3>", "<p>Kitten Rescue is a nonprofit organization dedicated to rescuing and adopting out homeless cats and kittens across Los Angeles. Established in 1997.</p>")
addMarker(34.044750, -118.442680, "<h3>Best Friends West LA (NKLA)</h3>", "<p>NKLA is a Best Friends initiative joining individuals, city shelters and animal welfare organizations to end the killing of pets in LA city shelters.</p>")
addMarker(33.852280, -118.138120, "<h3>Found Animals Adopt & Shop</h3>", "<p>Adopt a pet and stock up on pet supplies all in one easy location. Adopt & Shop offers pet adoption, retail products and pet services for your convenience. </p>")
addMarker(33.8572131, -117.9260034, "<h3>Cats in Need</h3>", "<p>ats In Need of Human Care is an organization of volunteers who work with one another and the community to find safe, loving homes for homeless pets, and to promote spay/neuter and responsible cat ownership.</p>")

const dataUrl = "https://example.com"

function loadData(url){
    fetch(url)
        .then(response => {
            console.log(response)
            return response
        })
        .then(data =>{
            // do something with the data
        })
}
// we will put this comment to remember to call our function later!
loadData(dataUrl)