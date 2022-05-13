const {GetAllPokemons, GetOnePokemon,GetPokemonName, CreateOnePokemon, PutOnePokemon, DeleteOnePokemon} = require('../models/pokemons.models')

exports.getAllPokemons = async (req, res) =>{
    try {
        let {page=0, limit}=req.query
        const {data:retorno, status} = await GetAllPokemons(Number(page),Number(limit))
        return res.status(status).json( retorno )
    } catch (error) {
        console.log('error',error)
        return res.status(500).json({MessageError:"Erro não esperado!"})
    }
}

exports.getOnePokemon = async (req, res) =>{
    const {data, status} = await GetOnePokemon(req.query.name)
    res.status(status).json(data)
}

exports.createPokemon = async (req, res) => {
    try {
        const {data:retorno, status} = await CreateOnePokemon(req.body)
        res.status(status).json(retorno)
    } catch (error) {
        return res.status(500).json({MessageError:"Erro não esperado!"})
    }
}

exports.putPokemon = async(req, res) => {
    try {
        const  {data:retorno, status} = await PutOnePokemon(req.params.id,req.body)
        res.status(status).json(req.body)
    } catch (error) {
        console.log('erro',error)
        return res.status(500).json({MessageError:"Erro não esperado!"})
    }
    
}

exports.removePokemon = async(req, res) => {
    try {
        const  {data:retorno, status} = await DeleteOnePokemon(req.params.id)
        res.status(status).json(retorno)
    } catch (error) {
        return res.status(500).json({MessageError:"Erro não esperado!"})
    }
    
}