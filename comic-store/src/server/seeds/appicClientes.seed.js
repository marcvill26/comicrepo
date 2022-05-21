const mongoose = require('mongoose');
const appidb = require('../appidb');
const AppiRegister = require('../models/AppiUsers');

const clientesRegister = [
    {
        name: 'Marcos', lastName:'Villegas', age: 35},
];

const clientesRegisterDocument = clientesRegister.map(cliente => new AppiRegister(cliente));

appidb.connectDB()
    .then(async() => {
        const allClient = await AppiRegister.find();
        if (allClient.length > 0) {
            await AppiRegister.collection.drop();
        }
    })
    .catch(err => console.error(`Error eliminado informacion de la DB: ${err}`))
    .then(async () =>{
        await AppiRegister.insertMany(clientesRegisterDocument)
    })
    .catch(err => console.error(`Error creando documentos en DB: ${err}`))

    .finally(() => mongoose.disconnect());