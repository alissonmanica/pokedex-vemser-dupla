import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { newGetPokemon } from "../../store/actions/ActionsPokemons"

function Details({pokemon, dispatch}: any) {
const {id}: any = useParams()

  useEffect(() => {
      newGetPokemon(dispatch, id)
  },[])


  return (
    <div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  pokemon:state.pokeReducer.pokemon
})

export default connect(mapStateToProps)(Details)