const jwt = require('jsonwebtoken');

// Secret token
const secretToken = '12345';

// Token creator function
const tokenCreator = (user) => {
    return jwt.sign(user, secretToken, {expiresIn: '1m'});
}

module.exports = tokenCreator;