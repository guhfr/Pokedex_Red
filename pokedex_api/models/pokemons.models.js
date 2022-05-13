const { ObjectId } = require('mongodb')
const {connectMongo} = require('../connect.js')

exports.GetAllPokemons = async (page=0, limit,) =>{
    
    const collection = await connectMongo('pokedex', 'pokemons')
    const skip = page>0? page*limit:0

    const [data] = await collection.aggregate(
        [
            {
                $facet:{
                    metaData: [{$count: 'total'},{$addFields:{page}}],
                    data: [{$skip:skip},{$limit:limit}]
                }
            }
        ]
    ).toArray()
    return {data, status: 200}
}

exports.GetOnePokemon = async (name) =>{

    const collection = await connectMongo('pokedex', 'pokemons')
    const data = await collection.findOne({Name:name})
    return {data, status: 200}
}

exports.CreateOnePokemon = async (body) =>{
    const collection = await connectMongo('pokedex', 'pokemons')
    const {insertedId} = await collection.insertOne(body)
    return {data: {_id:insertedId, body}, status: 201}
}

exports.PutOnePokemon = async (id,body) =>{
    try {
        const collection = await connectMongo('pokedex', 'pokemons')
        await collection.updateOne({_id:ObjectId(id)},{$set: body})
        return {data: {_id:id,...body}, status: 200}   
    } catch (error) {
        return console.log('error',error)
    }
}

exports.DeleteOnePokemon = async (id) =>{
    try {
        const collection = await connectMongo('pokedex', 'pokemons')
        const dataResponse = await collection.findOne({_id:ObjectId(id)})
        const deleting = await collection.deleteOne({_id:ObjectId(id)})
        return {data:dataResponse, status: 200}
    } catch (error) {
        return console.log('error',error)
    }
}