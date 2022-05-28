const express = require('express');
const passport = require('passport');
const userRouter = express.Router();

userRouter.get('/register', (req, res, next) => {
    return res.render('register');
});

userRouter.post('/register', (req, res, next) => {
    const { email, users, password } = req.body;

    if (!email || !users || !password) {
        const error = 'Fill all the fields'
        return res.render('register', { error });
    }

    const done = (error, user) => {

        if (error) {
            return next(error);
        }

        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }
            return res.redirect('/');
        });
    };

    passport.authenticate('register', done)(req);
});

userRouter.get('/login', (req, res, next) => {
    return res.render('login');
});

userRouter.post('/login', (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        const error = 'Fill all the fields'
        return res.render('register', { error });
    }

    const done = (error, user) => {
        if (error) return next(error);

        req.logIn(user, (error, user) => {
            if (error) {
                return next(error);
            };

            return res.redirect('/');
        });
    };

    passport.authenticate('login', done)(req);
});

userRouter.post('/logout', (req, res, next) => {
    if (req.user) {
        req.logout();
        
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            return res.redirect('/');
        });
    } else {
        return res.status(200).json('No user found');
    }

});

module.exports = userRouter;