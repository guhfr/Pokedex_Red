const {createUser, getAllUsers, getOneUser} = require('./controllers/users.controller');
const {getAllPokemons, getOnePokemon, createPokemon, putPokemon, removePokemon} = require('./controllers/pokemons.controller')

module.exports = (app) =>{
    app.get('/users/all', getAllUsers);
    app.get('/users/', getOneUser)
    app.post('/users', createUser);

    app.get('/pokemons/all', getAllPokemons);
    app.get('/pokemons', getOnePokemon);
    app.post('/pokemons', createPokemon);
    app.put('/pokemons/:id', putPokemon);
    app.delete('/pokemons/:id', removePokemon)
}