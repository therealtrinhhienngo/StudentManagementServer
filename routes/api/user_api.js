var express = require('express');
const tokenCreator = require('../../config/token_config');
var router = express.Router();

const user = [
    {id: 1, username: 'Yohoooo', password: 'abc123'},
    {id: 2, username: 'Sike', password: 'what?'}
];

router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log('Input Complete: ' + username);

        const userFinder = user.find((item) => item.username == username && item.password == password);
        if(!userFinder){
            console.log('Wrong user, sucka!!!');
            return ;
            res.end();
        }

        // Return token
        const publicToken = tokenCreator({id: userFinder.id, username: username, password: password});
        
        console.log('Token maker: ' + publicToken);
        res.send('Making token complete');
    } catch (error) {
        console.log(error);
    }
});

router.post('/test', async (req, res) => {
    try {
        res.send('Test');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;