const mongoose = require('mongoose');

const Hospedaje = require('./models/hospedar');

mongoose.connect('mongodb://localhost:27017/dataHospedaje').
    then(()=>{
        console.log("MONGO CONNECTION OPEN!!!");
    }).
    catch(error => {
        console.log("MONGO OH NO ERROR!!!");
        console.log(error)
});

const seedHabitaciones = [
/*     {
        namePlace: 'Cabaña Ébano Mazamitla',
        price: 1236,
        name: 'Emilio',
        huespedes: 2,
        habitaciones: 1,
        camas: 2,
        bath: 1,
        wifi: true,
        tv: true,
        cocina: true,
        comentario: `Hermosa Cabaña de Madera, muy acogedora y romántica ideal para parejas
        se encuentra en fraccionamiento privado arbolado, cuenta con lo siguiente: cama Kingsize,Jacuzzi grande para 2 personas, cocineta (microondas, frigobar, parrilla de 2 quemadores, utensilios de cocina básicos, red colgante, chimenea, pantalla HD (con cable) terraza área para asar carne, Wifi, Estacionamiento.
        la cabaña se encuentra en un conjunto de mas cabañas alrededor
        (No incluye productos de aseo personal shampoo,jabon)`
    },
    {
        namePlace: 'Cabaña La Tita',
        price: 750,
        name: 'Tita',
        huespedes: 2,
        habitaciones: 1,
        camas: 1,
        bath: 1,
        wifi: true,
        tv: true,
        cocina: true,
        comentario: 'Es una cabaña diseñada para que las parejas disfruten y se relajan en un lugar muy íntimo y privado en el bosque.'
    },
    {
        namePlace: 'Chulvista Luxury Apartment',
        price: 2200,
        name: 'Antonio',
        huespedes: 2,
        habitaciones: 1,
        camas: 1,
        bath: 1,
        wifi: true,
        tv: true,
        cocina: true,
        comentario: 'Bienvenido a este lujoso departamento. Espectacular vista al lago. Sala, cocina, comedor , 2 baños, alberca climatizada con sistema solar exclusiva para ustedes, 2 jacuzzis, recamara king size, y cochera techada automática, parrilla bbq . No hay zonas compartidas. Este departamento es exclusivo para 2 personas.'
    }, */
]

Hospedaje.insertMany(seedHabitaciones)
.then(res => {
    console.log(res);
})
.catch(e =>{
    console.log(e);
})