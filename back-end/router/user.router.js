const express = require('express');
const passport = require('passport');
const { signIn } = require('../authentication/jsonwebtoken');
const { isAuthenticated } = require('../middlewares/auth.middleware');

const usersRouter = express.Router();

<<<<<<< HEAD
const usersRouter = express.Router();


usersRouter.post('/Register', (req, res, next) => {

    const callback = (error, usuario) => {
=======
usersRouter.post('/register', (req, res, next) => {
>>>>>>> b71864cdedd7d945efb2f402c0baef5e65d1f9de

    const callback = (error, user) => {
        if (error) {
            console.log('Error entering callback', error);
            return next(error);
        }
        return res.status(201).json(user);
    };

    passport.authenticate('register', callback)(req);

});

usersRouter.post('/login', (req, res, next) => {

    const callback = (error, user) => {
        if (error) {
            return next(error);
        }

        const token = signIn(user, req.app.get('jwt-secret'));

        return res.status(200).json({ userId: user._id, token });
    };

    passport.authenticate('login', callback)(req);

});


usersRouter.post('/logout', [isAuthenticated], (req, res, next) => {

    // if (!req.authority) {

    //     return res.sendStatus(304);

    //     // res.status(304).send();

    // }

    return res.status(200).json('Closed user session');

});

module.exports = usersRouter;