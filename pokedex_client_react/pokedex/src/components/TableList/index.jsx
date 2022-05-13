import './style.css'
import getPokemons from '../services/getPokemons'
import { useState, useEffect} from 'react'


function TableList(props) {
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
      
    const {page, pokemon, options, sel} = props 
    const list = ['0','1','2','3','4','5','6','7','8','9']

    const [pokemons, setPokemons] = useState()
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck,setIsCheck] =useState([]);

    async function getAllPokes(page) {
        const GetAll = await getPokemons(page-1,9)
        const Pokemons = GetAll.data.data
        setPokemons(Pokemons)
    }

    async function handleSelectAll(){
        setIsCheckAll(!isCheckAll);
        await setIsCheck(list.map(li => li));
        options(true)
        if (isCheckAll) {
          setIsCheck([]);
          options(false)
        }
    }

    async function handleClick (e){
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        options(true)
        if (!checked) {
          setIsCheck(isCheck.filter(item => item !== id));
          if (!isCheckAll){
              options(false)
          }
        }
        console.log(isCheck)
      };

    useEffect(() => {
        getAllPokes(page);
        if(isCheck.length>0){
            setIsCheck([])
            setIsCheckAll(false)
        }
    }, [page])

    return (
        <div className='AllTable'>
            <div className="table-responsive">
                <table className="table">
                    <thead className ="thead-dark">
                        <tr>
                            <th scope="col"><input className='selectAll' type='checkbox' onChange={handleSelectAll} checked={isCheckAll}/></th>
                            <th scope="col">Name</th>
                            <th scope="col">Pokedex Number</th>
                            <th scope="col">Generation</th>
                            <th scope="col">Evolution Stage</th>
                            <th scope="col">Evolved</th>
                            <th scope="col">Family ID</th>
                            <th scope="col">Cross Gen</th>
                            <th scope="col">Type 1</th>
                            <th scope="col">Type 2</th>
                            <th scope="col">Weather 1</th>
                            <th scope="col">Weather 2</th>
                            <th scope="col">STAT TOTAL</th>
                            <th scope="col">ATK</th>
                            <th scope="col">DEF</th>
                            <th scope="col">STA</th>
                            <th scope="col">Legendary</th>
                            <th scope="col">Aquireable</th>
                            <th scope="col">Spawns</th>
                            <th scope="col">Regional</th>
                            <th scope="col">Raidable</th>
                            <th scope="col">Hatchable</th>
                            <th scope="col">Shiny</th>
                            <th scope="col">Nest</th>
                            <th scope="col">New</th>
                            <th scope="col">Not-Gettable</th>
                            <th scope="col">Future Evolve</th>
                            <th scope="col">CP 40</th>
                            <th scope="col">CP 39</th>
                        </tr>
                    </thead>
                    <tbody>
                    {   
                        pokemon=='notFound'?
                        <tr>
                        <td>
                        </td>
                        <td>
                        <div className='notFound'>
                            Pokémon não encontrado :(
                        </div>
                        </td>
                        </tr>
                        :(pokemon[0] && pokemon!='empty')?pokemon.map((x,index) => {
                            return (
                            <tr key={index}>
                                <td><div className='selectOne'> <input  id={index} type="checkbox" onChange={handleClick} checked={isCheck.includes(`${index}`)}/></div></td>
                                <td>{x.data.Name}</td>
                                <td>{x.data.Pokedex_Number}</td>
                                <td>{x.data.Generation}</td>
                                <td>{x.data.Evolution_Stage}</td>
                                <td>{x.data.Evolved}</td>
                                <td>{x.data.FamilyID}</td>
                                <td>{x.data.Cross_Gen}</td>
                                <td>{x.data.Type_1}</td>
                                <td>{x.data.Type_2}</td>
                                <td>{x.data.Weather_1}</td>
                                <td>{x.data.Weather_2}</td>
                                <td>{x.data.STAT_TOTAL}</td>
                                <td>{x.data.ATK}</td>
                                <td>{x.data.DEF}</td>
                                <td>{x.data.STA}</td>
                                <td>{x.data.Legendary}</td>
                                <td>{x.data.Aquireable}</td>
                                <td>{x.data.Spawns}</td>
                                <td>{x.data.Regional}</td>
                                <td>{x.data.Raidable}</td>
                                <td>{x.data.Hatchable}</td>
                                <td>{x.data.Shiny}</td>
                                <td>{x.data.Nest}</td>
                                <td>{x.data.New}</td>
                                <td>{x.data['Not-Gettable']}</td>
                                <td>{x.data.Future_Evolve}</td>
                                <td>{x.data.CP_40}</td>
                                <td>{x.data.CP_39}</td>
                            </tr>
                        ) }

                        ):pokemons?.map((x,index) => {
                            return (
                            <tr key={index}>
                                <td><div className='selectOne'> <input  id={index} type="checkbox" onChange={handleClick} checked={isCheck.includes(`${index}`)}/></div></td>
                                <td>{x.Name}</td>
                                <td>{x.Pokedex_Number}</td>
                                <td>{x.Generation}</td>
                                <td>{x.Evolution_Stage}</td>
                                <td>{x.Evolved}</td>
                                <td>{x.FamilyID}</td>
                                <td>{x.Cross_Gen}</td>
                                <td>{x.Type_1}</td>
                                <td>{x.Type_2}</td>
                                <td>{x.Weather_1}</td>
                                <td>{x.Weather_2}</td>
                                <td>{x.STAT_TOTAL}</td>
                                <td>{x.ATK}</td>
                                <td>{x.DEF}</td>
                                <td>{x.STA}</td>
                                <td>{x.Legendary}</td>
                                <td>{x.Aquireable}</td>
                                <td>{x.Spawns}</td>
                                <td>{x.Regional}</td>
                                <td>{x.Raidable}</td>
                                <td>{x.Hatchable}</td>
                                <td>{x.Shiny}</td>
                                <td>{x.Nest}</td>
                                <td>{x.New}</td>
                                <td>{x['Not-Gettable']}</td>
                                <td>{x.Future_Evolve}</td>
                                <td>{x.CP_40}</td>
                                <td>{x.CP_39}</td>
                            </tr>
                        ) })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableList


