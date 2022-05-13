import './style.css'
import { useState, useEffect} from 'react'
import TableCard from '../TableCard'
import TableList from '../TableList'
import getPokemons from '../services/getPokemons'
import Pagination from '@mui/material/Pagination';
import Filter from '../../imgs/Filter.png'
import Grid from '../../imgs/layout-grid.png'
import List from '../../imgs/align-justify.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import searchPokemon from '../services/searchPokemon'
import Trash from '../../imgs/trash-2.png'
import Edit from '../../imgs/create-outline.png'
import Create from '../../imgs/plus-circle.png'
import Add from '../../imgs/file-plus.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Pokedex(){
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = createTheme({
    status: {
      error: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#FFCB05',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

const [card,setCard] = useState(false)
const [pageTotal,setPageTotal] = useState(0)
const [actualPage, setActualPage] = useState(1)
const [pokemons, setPokemons] = useState([])
const [search, setSearch] = useState('')
const [options, setOptions] = useState(false)
const [select,setSelect] = useState([])

async function TodosPoke(){
  const GetAll = await getPokemons(0,10)
  setPageTotal(GetAll.data.metaData[0].total)
}

async function selectPoke(poke){
  await setSelect[poke]
}

async function deletePoke(alvo){
  console.log(alvo)
  // const result = await removePoke(alvo)
}

async function onSearch(pokemon){
  const result = await searchPokemon(pokemon)
  if(!result.data){
    setPokemons('notFound')
    setActualPage(0)
  }else{
    setPokemons([result])
  }
}

async function inputSearch (e){
  setSearch(e.target.value)
  if (e.target.value.length==0){
    setPokemons('empty')       
  }
}

async function pesquisar(){
  await onSearch(search)
}

useEffect(()=>{
  TodosPoke()
},[])

const mudarPagina = (event, value) => {
  setActualPage(value)
};

const showOptions =(x) =>{
  setOptions(x)
}


const TotalPages = parseInt(pageTotal/9)


    return(
        <div className="pokedex">
          <div className='title-page1'>
            TODOS OS POKÉMONS
          </div>
          <div className='searchbar'>
            <input className='inputSearch' placeholder='Buscar por nome do pokémon' type='text'  onChange={inputSearch} ></input>
            <button className='buttonSearch' onClick={pesquisar} >Buscar</button>
          </div>
          <div className='filters'>
            <div className='leftOptions'>
              {
                options?<div className='Options'>
                <div className='opt' onClick={handleOpen}>
                  <img src={Trash}/><div className='iconLegend'>Deletar pokémon</div>
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                >
                  <Box sx={style}>
                    <div>
                      Deletar Pokemon?
                    </div>
                    <div>
                      <button onClick={()=>{deletePoke(select)}}>Deletar</button>
                      <button onClick={handleClose}> Cancelar</button>
                    </div>
                    
                  </Box>
                </Modal>
                <div className='opt'>
                  <img src={Edit}/><div className='iconLegend'>Editar pokémon</div>
                </div>
                <div className='opt'>
                  <img src={Create}/><div className='iconLegend'>Criar lista com selecionados</div>
                </div>
                <div className='opt'>
                  <img src={Add}/><div className='iconLegend'>Adicionar selecionados a uma lista existente</div>
                </div>
              </div>:card==false?<div className='showType' onClick={()=>setCard(true) }><img src={Grid}/><div className='iconLegend'>Show Cards</div></div>:
  <div className='showType' onClick={()=>setCard(false)}><img src={List}/><div className='iconLegend'>Show List</div></div>
              }
            </div>
            <div className='showType' onClick={()=>alert('Modal de Filtro')}>
              <img src={Filter}/><div className='iconLegend'>Filtro avançado</div>
            </div>
          </div>
          <div className='tableOptions'>
            {
              card==false?<TableList page={actualPage} pokemon={pokemons} options={showOptions} sel={selectPoke}/>:<TableCard page={actualPage} pokemon={pokemons}/>
            }
          </div>
          <div className='pagination'>
          <ThemeProvider theme={theme}>
              <Pagination count={TotalPages} size="small" color="primary" onChange={mudarPagina}/>
          </ThemeProvider>
        </div>
      </div>
    )
}

export default Pokedex

