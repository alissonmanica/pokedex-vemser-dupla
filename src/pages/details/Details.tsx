import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { newGetPokemon } from "../../store/actions/ActionsPokemons"

function Details({pokemon, dispatch}: any) {
const {id}: any = useParams()

  // const verificaLength = () => {
  //   if (Object.keys(pokemon).length) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // useEffect(() => {
  //   if (verificaLength()) {
  //     newGetPokemon(dispatch, id)
  //   }
  //   console.log(pokemon)
  // },[])


  return (
    <div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  pokemon:state.pokeReducer.pokemon
})

export default connect(mapStateToProps)(Details)