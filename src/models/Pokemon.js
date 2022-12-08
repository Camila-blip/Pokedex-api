const axios = require('axios');

async function getPokemon(req,res){
    let pokemons = [];
    let page =  parseInt(req.params.page) + 1;
    let size =  parseInt(req.params.size);
    let calculoEnd = page === 1? 11 : (page * size) + 1;
    let calculoStart = page === 1 ? 1 : calculoEnd - 10;
    
    for (let i = calculoStart; i < calculoEnd; i++ ){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const name = response.data.name;
        const imagem = response.data.sprites.front_default;
        const tipo = response.data.types;
        const elementoTipos = tipo.map(typeInfo => typeInfo.type.name).join(" | ");
        pokemons.push({Name:name,Tipo: elementoTipos,Imagem:imagem });
    }
    
    return pokemons;   
}

module.exports = {getPokemon}