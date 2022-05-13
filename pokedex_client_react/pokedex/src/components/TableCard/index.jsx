import './style.css'
import getPokemons from '../services/getPokemons'
import { useState, useEffect} from 'react'

function TableCard(props){
    const {page, pokemon} = props 
    const [pokemons, setPokemons] = useState()

    async function getAllPokes(page) {
        const GetAll = await getPokemons(page-1, 9)
        const Pokemons = GetAll.data.data
        setPokemons(Pokemons)
    }
    
    

    useEffect(() => {
        getAllPokes(page)
    }, [page]) 

    return (
        <div className='AllCards'>
            {
                        pokemon=='notFound'?
                                <div className='notFound'>
                                    Pokémon não encontrado :(
                                </div>
                        :(pokemon[0] && pokemon!='empty')?pokemon.map((x,index) => {return (
                            <div className='individual-card' key={index}>
                                <div className='topDiv'>
                                    <img className='imgPokes' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${x.data.Img_name.padStart( 3, "0" )}.png`}/>
                                </div>
                                <div className='bottomDiv'>
                                <div className='name'>
                                {x.data.Name}
                                </div>
                                <div className='status'>
                                <div>
                                ATK: {x.data.ATK}
                                </div>
                                <div>
                                DEF: {x.data.DEF}
                                </div>
                                <div>
                                STA: {x.data.STA}
                                </div>
                                </div>
                                </div>
                            </div>
                        )}):
                        pokemons?.map((x,index) => {return (
                            <div className='individual-card' key={index}>
                                <div className='topDiv'>
                                    <img className='imgPokes' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${x.Img_name.padStart( 3, "0" )}.png`}/>
                                </div>
                                <div className='bottomDiv'>
                                <div className='name'>
                                {x.Name}
                                </div>
                                <div className='status'>
                                <div>
                                ATK: {x.ATK}
                                </div>
                                <div>
                                DEF: {x.DEF}
                                </div>
                                <div>
                                STA: {x.STA}
                                </div>
                                </div>
                                </div>
                            </div>
                        )})
            }                        </div>
    )
}

export default TableCard
