const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json('No está autorizado.');
  };

  const separados = authorization.split(' ')
  if (separados.length !== 2 || separados[0] !== 'Bearer') {
    return res.status(400).json('Cabecera de auth incorrecta');
  }

  const [, token] = separados;

  try {
    const tokenInfo = jwt.verify(token, req.app.get('jwt-secret'));
    req.authority = {
      id: tokenInfo.uid,
      frase: tokenInfo.frase,
      nombre: tokenInfo.nombre,
      admin: tokenInfo.admin,
    };
    next();
  } catch (error) {
    return res.status(403).json(error);
  }

};



module.exports = {
  isAuthenticated,
  
};

