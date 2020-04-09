const jwt = require('jsonwebtoken'),
    secret = '1234';

module.exports = {
    async validate(request, response, next) {

        let token = request.headers['x-access-token'];
        if (!token)
            return response.status(401).send({ message: 'Token não informado.' });

        jwt.verify(token, secret, function (err, decoded) {
            if (err)
                return response.status(500).send({ message: 'Token inválido.' });

            next();
        });
    }
}