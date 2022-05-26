const appiConfig = require('./appiConfig');
const express = require('express');
const passport = require('passport');
require('./authentication/passport');
const auth = require('./middlewares/auth.middleware');

const userRouter = require('./router/user.router');
const comicsRouter = require('./router/appiComics.router');
const appidb = require('./appidb');
const logger = require('./middlewares/logger.middleware');

const PORT = appiConfig.PORT;
const appiserver = express();

appidb();
appiserver.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
appiserver.set('jwt-secret', appiConfig.JWT_SECRET);

appiserver.use(express.json());
appiserver.use(express.urlencoded({ extended: true }));

//appiserver.use(passport.initialize());

appiserver.get('/', (req, res) =>{
    res.status(200).send('Server is up & running');
});


appiserver.use('/appi/comics',comicsRouter);
appiserver.use('/appi/registerUser',[auth.isAuthenticated],userRouter);
appiserver.use('/api/info', (req, res, next) => {
    return next(setError(200, 'INFO'))
})

// appiserver.use('*',(req, res, next) =>{
//     const error = new Error('Ruta no encontradas');
//     error.status=404;
//     return next(error);
// });

appiserver.use((err, _req, res, _next) => {
    return res
        .status(err.status || 500)
        .json(err.message || 'Error inesperado en Servidor');
});

appidb.connectDB().then(() => {
    console.log('Conectado a base de datos mongo');
    appiserver.listen(PORT, () =>{
        console.log(`Iniciado servidor express en puerto ${PORT}`);
    });
});
//comentando
