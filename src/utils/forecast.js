const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    const url = 'http://api.weatherstack.com/current?access_key=28f8755c46b754921bf11eb776ab836d&query=' + latitude + ',' + longitude + '&units=f'
    
    // const url = 'http://api.weatherstack.com/current?access_key=28f8755c46b754921bf11eb776ab836d&query=33.0151,-96.5389&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is: '+ body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast