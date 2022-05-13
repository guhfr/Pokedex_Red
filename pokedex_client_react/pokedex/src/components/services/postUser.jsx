import {api} from './api'

const postUser = async(req,res)=>{
    try {
        const user = {email:req.email, senha:req.senha}
        let response = await api.post('/users',user)
        return response
    } catch (error) {
        console.log('ERRO: ', error)
    }
}

export default postUser