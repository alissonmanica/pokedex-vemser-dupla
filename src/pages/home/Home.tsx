import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getInPokemons } from "../../store/actions/ActionsPokemons"
import { getSearchByInput } from "../../store/actions/ActionsPokemons"
import { getInPokemonEspecifico } from "../../store/actions/ActionsPokemons"
import { connect } from "react-redux"

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
    <div>
        <h1>Pokedex</h1>
        <input type="text" placeholder='Procurar'onChange={(e)=>{setNomeInput(e.target.value)}} onBlur={()=>{getSearchByInput(dispatch ,pokemons , nomeInput)} }/>

        {console.log(pokemons)}
        {pokemons.map((pokemon:any , indice:any ) =>(
          <div key={indice} onClick={() => getInPokemonEspecifico(dispatch , pokemon.url, navigate)}>
            <p>{pokemon.name}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt="" />
          </div>
        ))}
    </div>
  )
}
const mapStateToProps = (state:any) => ({
  pokemons:state.pokeReducer.listPokemon,
})
export default connect(mapStateToProps)(Home)