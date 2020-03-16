const request = require('request');

// Darksky hardcoded url
var darkSkyUrl = 'https://api.darksky.net/forecast/';
const darkSkySecretKey = process.env.DARKSKY_SECRET;
const coordinates = '/37.8267,-122.4233'

darkSkyUrl += darkSkySecretKey;
darkSkyUrl += coordinates;

request({url: darkSkyUrl, json: true}, (error, response) => {

    // Check if we can connect to the weather service 
    if (error) {
        console.log('Unable to connect to weather service.');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.');
        console.log('There is a ' + response.body.currently.precipProbability + '% chance of rain.');
    }
});

var geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=';

const mapboxSecretKey = process.env.MAPBOX_SECRET;

geocodeUrl +=  mapboxSecretKey;

request({url: geocodeUrl, json: true}, (error, response) => {

    // Check if we can connect to mapbox service
    if (error) {
        console.log('Unable to connect to location service.');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.');
    } else {
        const lat = response.body.features[0].center[1];
        const long = response.body.features[0].center[0];

        console.log('lat is ' + lat + ' long is ' + long);
    }
});