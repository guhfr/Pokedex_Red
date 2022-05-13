import {api} from './api'

const getUser = async(req,res)=>{
    try {
        let response = await api.get(`/users?email=${req}`)
        return response
    } catch (error) {
        console.log('ERRO: ', error)
    }
}

export default getUser