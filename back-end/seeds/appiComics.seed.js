const mongoose = require('mongoose');
const appidb = require('../../back-end/appidb');
const Comics = require('../models/AppiComics');

const comics = [
    {
        hero: 'Spider-man', 
        nameHero:'Peter Parker',
        writer:'Brian Bendis',
        year:2000,
        description:'Spider-Man has spider-like abilities including superhuman strength and the ability to cling to most surfaces.',
        penciler:'Mark Gagley',
        image:'https://www.zonanegativa.com/imagenes/2016/03/Ultimate-Spider-Man-5-cover.jpg',
        issues:166,
        id:1

},
];

const comicsDocument = comics.map(comic => new Comics(comic));

appidb.connectDB()
    .then(async () => {
        const allComics = await Comics.find();
        if(allComics.length > 0){
            await Comics.collection.drop();     
        }
    })
    .catch(err => console.error(`Error eliminando informacion de la DB: ${err}`))
    .then(async () => {
        await Comics.insertMany(comicsDocument)
    })
    .catch(err => console.error (`Error creando documentos en DB: ${err}`))
    .finally(() => mongoose.disconnect());
   