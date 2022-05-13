import {api} from './api'

const getPokemons = async(page=0, limit)=>{
    try{
        let response = await api.get(`/pokemons/all?page=${page}&limit=${limit}`)
        return response
    } catch (error) {
        console.log('ERRO: ', error)
    }
}

export default getPokemons