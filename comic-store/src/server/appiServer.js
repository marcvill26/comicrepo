const appiConfig = require('./appiConfig');
const express = require('express');
const passport = require('passport');
require('./authentication/passport');
const auth = require('./middlewares/auth.middleware');
const appilogingRouter = require('./router/appiLoging');
const appiregisterRouter = require('./router/appiRegister');
const appicomicsRouter = require('./router/appiComics');
const appidb = require('./appidb');
const logger =require('./middlewares/logger.middleware');

const PORT = appiConfig.PORT;
const appiserver = express();

appiserver.set('jwt-secret', appiConfig.JWT_SECRET);

appiserver.use(express.json());
appiserver.use(express.urlencoded({ extended: false }));

appiserver.use(passport.initialize());

appiserver.get('/', (req, res) =>{
    res.status(200).send('Server is up & running');
});

appiserver.use('/AppiUserLoging',[logger], appilogingRouter);
appiserver.use('/AppiComics',[logger], appicomicsRouter);
appiserver.use('/AppiRegisterUser',[logger, auth.isAuthenticated], appiregisterRouter);

appiserver.use('*',(req, res, next) =>{
    const error = new Error('Ruta no encontradas');
    error.status=404;
    return next(error);
});

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