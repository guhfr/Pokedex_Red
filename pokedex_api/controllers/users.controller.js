const {GetAllUsers, GetOneUser, GetEmailUser,CreateOneUser} = require('../models/users.models')

exports.getAllUsers = async (req, res) =>{
    const {data:retorno, status} = await GetAllUsers()
    res.status(status).json( retorno )
}

exports.getOneUser = async (req, res) =>{
    const {data, status} = await GetOneUser(req.query.email)
    res.status(status).json(data)
}

exports.createUser = async (req, res) => {
    const {data:retorno, status} = await CreateOneUser(req.body)
    res.status(status).json(req.body)
}

// exports.putUser = async(req, res) => {
//     const  {data:retorno, status} = await PutOne(req.params.id,req.body)
//     res.status(status).json(req.body)
// }

// exports.removeUser = async(req, res) => {
//     const  {data:retorno, status} = await DeleteOne(req.params.id)
//     res.status(status).json(retorno)
// }