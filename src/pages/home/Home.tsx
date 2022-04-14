import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getInPokemons } from "../../store/actions/ActionsPokemons"
import { getSearchByInput } from "../../store/actions/ActionsPokemons"
import { connect } from "react-redux"
import { firstLetterUpper } from "../../Utils"
import pokeBall from './Pokeball.png'
import {
DivMaior,
H1,
DivDoPokemon,
PdivDoPokemon,
DivGrid,
InputDefault,
DivHeader,

} from "./Home.styles"

function Home({pokemons , dispatch}:any) {
const navigate = useNavigate()  
useEffect(()=>{
  getInPokemons(dispatch) 
},[])
  const [nomeInput ,setNomeInput] = useState('')
  if(pokemons.length === 0){
    return(<h1>Loading</h1>)
  }
  return (
    <DivMaior>
      <DivHeader>
        <H1><span><img src={pokeBall} alt="" /></span> Pokedex</H1>
        <InputDefault type="text" placeholder='Procurar'onChange={(e)=>{setNomeInput(e.target.value)}} onBlur={()=>{getSearchByInput(dispatch ,pokemons , nomeInput)} }/>
      </DivHeader>
        <DivGrid >
        {pokemons.map((pokemon:any , indice:any ) =>(
          <DivDoPokemon key={indice} onClick={() => navigate(`detail/${pokemon.url.split('/')[6]}`) }>
              <PdivDoPokemon>{firstLetterUpper(pokemon.name)}</PdivDoPokemon>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt="" />
         </DivDoPokemon>
        ))}
        </DivGrid>
    </DivMaior>
  )
}
const mapStateToProps = (state:any) => ({
  pokemons:state.pokeReducer.listPokemon,
})
export default connect(mapStateToProps)(Home)