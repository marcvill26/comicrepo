const jwt = require('jsonwebtoken');

const signIn = (user, secret) => {
    const token = jwt.sign(
        {
            uid: user._id,
            name: user.name,
            email: "",
        },
        secret,
        { expiresIn: '1h' }
    );

    return token;
    
};

module.exports = { signIn };

