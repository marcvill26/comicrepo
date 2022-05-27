const express = require('express');
const Comics = require('../models/AppiComics');
const auth = require('../middlewares/auth.middleware');
const {upload, uploadToCloudinary} = require('../middlewares/file.middleware');



const comicsRouter = express.Router();

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

//Get comics
comicsRouter.get('/', (req,res, next) => {
    let filtro = {};
    if(req.query.hero){
        filtro = {...filtro, hero: req.query.hero};
    }
    const lstYear = Number(req.query.lstYear);
    const newYear = Number(req.query.newYear);
    if(!isNaN(lstYear) && !isNaN(newYear)){
        filtro ={...filtro, year: {$lt: lstYear, $gte: newYear}};
    }else if (!isNaN(lstYear)){
        filtro = {...filtro, year: {$lt: lstYear}}
    }else if (!isNaN(newYear)){
        filtro ={...filtro,year: {$gte: newYear}};
    }
    console.log('Filtro de /comics', filtro);
    return Comics.find(filtro)
        .then(comicsLeidos => {
            return res.status(200).json(comicsLeidos);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

comicsRouter.get('/:id',(req, res, next) => {
    const id = req.params.id;
    return Comics.findById(id)
        .then((comic) => {
            if(!comic) {
                const error = new Error('Comic no encontrado');
                error.status = 404;
                return next(error);
            }
            return res.status(200).json(comic);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});


comicsRouter.post('/', (req, res, next) => {
    const imageComic = req.file_url? req.file_url: undefined;
    const newComic = new Comics({
       hero: req.body.hero,
       nameHero: req.body.nameHero,
       writer: req.body.writer,
       year: req.body.year,
       description: req.body.description,
       penciler: req.body.penciler,
       image: req.body.image,
       collection: req.body.collection,
       issues: req.body.issues,
       imagen: imageComic, 
    });
    return newComic.save()
        .then(() => {
            return res.status(201).json(newComic);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });

});

comicsRouter.put('/:id', (req, res, next) => {
    const id = req.params.id;

    return Comics.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        .then(comicActualizado => {
            return res.status(200).json(comicActualizado);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

comicsRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    return Comics.findByIdAndDelete(id)
        .then(() => {
            return res.status(200).json(`Comic con id: ${id} eliminado`);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});
module.exports = comicsRouter;