const request = require("request");

const forecast = (longitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKY_SECRET + '/' + latitude + ',' + longitude;

    request({url: url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            });
        }    
    });
}

module.exports = forecast;