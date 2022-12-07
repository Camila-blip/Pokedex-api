const axios = require('axios');

exports.getPokemon = async (req, res, next) => {
    let pokemons = [];
    let page =  parseInt(req.params.page) + 1;
    let size =  parseInt(req.params.size);
    let calculoEnd = page === 1? 11 : (page * size) + 1;
    let calculoStart = page === 1 ? 1 : calculoEnd - 10;
    try{
        for (let i = calculoStart; i < calculoEnd; i++ ){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const name = response.data.name;
            const imagem = response.data.sprites.front_default;
            const tipo = response.data.types;
            const elementoTipos = tipo.map(typeInfo => typeInfo.type.name).join(" | ");
            pokemons.push({Name:name,Tipo: elementoTipos,Imagem:imagem });
        }
        console.log(pokemons)
        res.status(200).send(pokemons);
    }catch(err){
        console.log(err)
        res.status(400).send("Ops algo deu errado!");
    }
}
   
    