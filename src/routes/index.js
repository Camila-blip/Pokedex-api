const UsuarioRoute = require('./UsuarioRoute');
const PokemonRoute = require('./PokemonRoute');

module.exports = (app) => {
   UsuarioRoute(app)
   PokemonRoute(app)
}

