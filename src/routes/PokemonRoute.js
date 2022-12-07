const PokemonController = require('../controllers/PokemonController');

module.exports = (app) => {
    app.get('/pokemon/:page/:size', PokemonController.getPokemon);
 }