import './style.css'
import Filter from '../../imgs/Filter.png'
import Grid from '../../imgs/layout-grid.png'
import List from '../../imgs/align-justify.png'
import { useState } from 'react'

function MyList(){
  const [card,setCard] = useState(false)



    return(
        <div className="myList">
          <div className='title-page2'>
            MINHAS LISTAS
          </div>
          <div className='searchbar2'>
            <input className='inputSearch' placeholder='Buscar por nome do pokémon' type='text'  ></input>
            <button className='buttonSearch'>Buscar</button>
          </div>
          <div className='filters2'>
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

export default MyList