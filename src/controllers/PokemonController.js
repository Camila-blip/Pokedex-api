const Pokemon = require('../models/Pokemon');

exports.getPokemon = async (req, res, next) => {
    const returnPokemon = await Pokemon.getPokemon(req)
    try{
        res.status(200).send(returnPokemon);
    }catch{
        res.status(400).send("Ops algo deu errado!");
    }
}
   
    