const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=32317b89c91014535daee7b43112ed33
    `)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}