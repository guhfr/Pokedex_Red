import {api} from './api'

const searchPokemon = async(name)=>{
    try{
        let response = await api.get(`/pokemons/?name=${name}`)
        return response
    } catch (error) {
        console.log('ERRO: ', error)
    }
}

export default searchPokemon