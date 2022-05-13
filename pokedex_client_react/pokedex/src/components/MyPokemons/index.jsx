import './style.css'
import { useState } from 'react'
import Filter from '../../imgs/Filter.png'
import Grid from '../../imgs/layout-grid.png'
import List from '../../imgs/align-justify.png'

function MyPokemons(){
      const [card,setCard] = useState(false)
      const [options, setOptions] = useState(false)

      return(
          <div className="myList">
            <div className='title-page2'>
              MEUS POKÉMONS
            </div>
            <div className='searchbar2'>
              <input className='inputSearch' placeholder='Buscar por nome do pokémon' type='text'  ></input>
              <button className='buttonSearch'>Buscar</button>
            </div>
            <div className='filters2'>
            <div>
              {
                card==false?<div className='showType' onClick={()=>setCard(true) }><img src={Grid}/><div className='iconLegend'>Show Cards</div></div>:
                <div className='showType' onClick={()=>setCard(false)}><img src={List}/><div className='iconLegend'>Show List</div></div>
              }
            </div>
              <div className='showType' onClick={()=>alert('Modal de Filtro')}>
                <img src={Filter}/><div className='iconLegend'>Filtro avançado</div>
              </div>
            </div>
            <div className='table2'>
            TABELAS
            </div>
            <div className='pagination2'>
            </div>
          </div>
    )
}

export default MyPokemons