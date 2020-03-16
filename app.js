const request = require('request');

// Darksky hardcoded url
var url = 'https://api.darksky.net/forecast/';
const secretKey = process.env.DARKSKY_SECRET;
const coordinates = '/37.8267,-122.4233'
url += secretKey;
url += coordinates;

request({url: url, json: true}, (error, response) => {
    console.log('It is currently ' + response.body.currently.temperature + ' degrees out.');
    console.log('There is a ' + response.body.currently.precipProbability + '% chance of rain.');
});