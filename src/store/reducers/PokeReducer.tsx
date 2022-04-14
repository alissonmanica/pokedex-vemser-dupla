
const INITIAL_VALUES = {
  listPokemon: [],
  pokemon: {}
}

function pokeReducer(state = INITIAL_VALUES, action: any) {
  if (action.type === 'SET_LIST') {
    return {
      ...state,
      listPokemon: action.listPokemon
    }
  }
  
  if (action.type === 'SET_POKEMON') {
    return {
      ...state,
      pokemon: action.pokemon
    }
  }
  return state
}
export default pokeReducer