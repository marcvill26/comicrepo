const express = require('express');

const passport = require('passport');

const { signIn } = require('../authentication/jsonwebtoken');

const { isAuthenticated } = require('../middlewares/auth.middleware');


const usersRouter = express.Router();


usersRouter.post('/Register', (req, res, next) => {

    const callback = (error, usuario) => {

        if (error) {

            console.log('Error al entrar en callback', error);

            return next(error);

        }



        return res.status(201).json(usuario);

    };



    passport.authenticate('registro', callback)(req);

});

usersRouter.post('/login', (req, res, next) => {

    const callback = (error, usuario) => {

        if (error) {

            return next(error);

        }

        const token = signIn(usuario, req.app.get('jwt-secret'));

        return res.status(200).json({ userId: usuario._id, token });

    };



    passport.authenticate('login', callback)(req);

});


usersRouter.post('/logout', [isAuthenticated], (req, res, next) => {

    // if (!req.authority) {

    //     return res.sendStatus(304);

    //     // res.status(304).send();

    // }



    return res.status(200).json('Cerrada sesión de usuario');

});



module.exports = usersRouter;