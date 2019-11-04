const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidApi-Key': '61df9c620bmsh43035ce2df87ba4p16df6bjsnc60f44b4f197' }
    });


    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No ahi resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}