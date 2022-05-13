const { ObjectId } = require('mongodb')
const {connectMongo} = require('../connect.js')

exports.GetAllUsers = async (page=0, limit=12,) =>{
    const collection = await connectMongo('pokedex', 'users')
    const data = await collection.find().toArray()
    return {data, status: 200}
}

exports.GetOneUser = async (mail) =>{
    const collection = await connectMongo('pokedex', 'users')
    const data = await collection.findOne({email:`${mail}`})
    return {data, status: 200}
}

exports.CreateOneUser = async ({email, senha}) =>{
    const collection = await connectMongo('pokedex', 'users')
    const {insertedId} = await collection.insertOne({email, senha})
    return {data: {_id:insertedId,email,senha}, status: 201}
}

// exports.PutOneUser = async (id,{email, senha}) =>{
//     try {
//         const {collection} = await connectMongo('pokedex', 'users')
//         await collection.updateOne({_id:ObjectId(id)},{$set: {email, senha}})
//         return {data: {_id:id,name,email}, status: 200}   
//     } catch (error) {
//         return console.log('error',error)
//     }
// }

// exports.DeleteOneUser = async (id) =>{
//     try {
//         const {collection} = await connectMongo('pokedex', 'users')
//         const dataResponse = await collection.findOne({_id:ObjectId(id)})
//         const deleting = await collection.deleteOne({_id:ObjectId(id)})
//         return {data:dataResponse, status: 200}
//     } catch (error) {
//         return console.log('error',error)
//     }
// }