const mongoose = require('mongoose');
const appidb = require('../appidb');
const config = require('../config');
const AppiRegister = require('../models/User');

const clientesRegister = [
     {
        users: "marcos",
        email:"marcv@gmail.com",
        password: "12345678.B",
        age: 35,
        role:"admin",
    },
    {
        users: "estefany",
        age: 26,
        role:"admin",
        email:"stefany@gmail.com",
        password: "12345678.B",
    }
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