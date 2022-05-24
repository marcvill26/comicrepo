const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');

const User = require('../models/AppiUsers');

const LocalStrategy = passportLocal.Strategy;

const SALT_ROUNDS = 10;

passport.use('register',
    new LocalStrategy(
        {
            usernameField: 'email', // req.body.email
            passwordField: 'password', // req.body.password
            passReqToCallback: true,
        },
        async (req, username, password, done) => {
            try {
                // 1. Buscar si el usuario existe en la DB
                const userExists = await User.findOne({ email: username });

                // 2. Si el usuario ya existe, salimos con un error
                if (userExists) {
                    const error = new Error('User already registered');
                    return done(error);
                }

                // 3. Encriptar la contraseña
                const passwordEncrypted = await bcrypt.hash(password, SALT_ROUNDS);

                // 4. Crear el documento del Usuario para guardarlo en DB
                const newUser = new User({
                    email: username,
                    password: passwordEncrypted,
                    // name: req.body.name // passReqToCallback = false, no podemos acceder aquí a req
                });
                const userSaved = await newUser.save();

                // 4.1. Eliminar contrasena del nuevoUsuario para no mandarlo en la respuesta
                userSaved.password = undefined;

                // 5. Retornar OK/KO
                done(null, userSaved);
            } catch(error) {
                return done(error);
            }
        }
    ))

passport.use('login',
    new LocalStrategy(
        {
            usernameField: 'email', // req.body.email
            passwordField: 'password', // req.body.password
            passReqToCallback: true,
        },
        async (req, username, password, done) => {
            try {
                // 1. Buscar el usuario por el correo/nombre de usuario/algo unico que el usuario si conozca y recuerde
                const user = await User.findOne({ email: username });

                // 2. Si el usuario no existe fallamos (porque no puede logearse nadie que no esté registrado)
                if (!user) {
                    const error = new Error('User not registered');
                    return done(error);
                }

                // 3. Comparar contraseñas
                const isPwdValid = await bcrypt.compare(password, user.contrasena);

                // 4. Si la contraseña no es valida, fallamos
                if (!isPwdValid) {
                    const error = new Error('Password is not valid');
                    return done(error);
                }

                // 5. Damos por valido el login ya que el correo encaja y la contraseña es valida
                user.password = undefined;
                return done(null, user);
            } catch(error) {
                return done(error);
            }
        }
    ))

passport.serializeUser((user, done) => {
    return done(null, user._id);
});
passport.deserializeUser(async (userId, done) => {
    try {
        const user = await User.findById(userId);
        return done(null, user);
    } catch(error) {
        return done(error);
    }
});