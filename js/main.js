
// fill myDiv with content
 function myFunc(){
     var myDiv =  document.getElementById("myDiv");
     myDiv.innerHTML = "Repair Network";
 };

 window.onload = myFunc();


// --------------------------------------------------
// declare map + instantiate at specified coordinates
//    zoom level scale 1(globe) --> 16 (house)
var map

map = L.map('map', {
  center: [40.513799, -98.349609],
  zoom: 4
});

// declare + instantiate basemap tiles
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   subdomains: 'abcd',
   minZoom: 1,
   maxZoom: 16,
   ext: 'jpg'
 }).addTo(map);

// load data to map
 function jsAjax(){
    // Step 1: Define the data request
    var request = new Request('data/congregations.geojson');
    //Step 2: define Fetch parameters
    var init = {
        method: 'GET'
     }
     //Step 3: use Fetch to retrieve the data
    fetch(request, init)
 };

 window.onload = jsAjax();












/*
// drop a map pin
 var marker = L.marker([51.5, -0.09]).addTo(map);

// drop a circle
 var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// drop a polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

// create popups from map click: lat long coords in dialog
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

// declare geojson data
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

// add geojson data to map
L.geoJSON(geojsonFeature).addTo(map);
*/

/*

//function to instantiate the Leaflet map
function createMap(){
 //create the map
 map = L.map('map').setView([47.1164, -101.2996], 4);


 // basemap tiles: stamen watercolor basemap
 var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
  }).addTo(map);

  //call getData function
 getData();
};

//function to retrieve the data and place it on the map
function getData(){
 //load the data
 fetch("data/congregations.geojson")
     .then(function(response){
        return response.json();
     })
     .then(function(json){
       //create marker options
       var geojsonMarkerOptions = {
           radius: 5,
           fillColor: "#ff7810",
           color: "#000",
           weight: 1,
           opacity: 1,
           fillOpacity: 0.5
       };
       //create a Leaflet GeoJSON layer and add it to the map
       L.geoJson(json, {
         pointToLayer: function (feature, latlng) {
           return L.circleMarker(latlng, geojsonMarkerOptions);
         }
       //...add it to the map
       }).addTo(map);
     });
};

document.addEventListener('DOMContentLoaded',createMap)
*/
