const jwt = require('jsonwebtoken');
const PokemonController = require('../controllers/PokemonController');

function verifyJWT(req, res, next){
    const token =  req.headers.authorization;
    if (token && token.split(' ')[0] === 'Bearer'){
        const returnToken = token.split(' ')[1];
        jwt.verify(returnToken, process.env.SECRET_API, function(err, decoded){
            if (err){
                return res.status(500).send("Failed to authenticate token.");
            }else{
                next();
            }
        })
    }else{
        return res.status(401).send({message: "No token provided."});
    }
}


module.exports = (app) => {
    app.get('/pokemon/:page/:size', verifyJWT, PokemonController.getPokemon);
 }