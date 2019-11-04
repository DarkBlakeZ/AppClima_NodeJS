const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv


lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

clima.getClima(-30.020000, -56.450001)
    .then(respu => console.log(respu + " Grados Kelvin"))
    .catch(console.log)


const getInfo = async(dir) => {

    let coords = await lugar.getLugarLatLng(dir);
    let cc = await clima.getClima(coords.lat, coords.lng);

    if (!cc) {
        throw new Error(`No se pudo determinar el clima de ${dir}`)
    }
    return `El clima de ${dir} es de ${cc}`

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)