import apiPokedex from "../../apiPokedex"

export async function getInPokemons(dispatch:any) {
    try{
        const {data} = await apiPokedex.get('pokemon?limit=151&offset=0')
        const setArray = {
            type:'SET_LIST',
            listPokemon:data.results
        }
        dispatch(setArray)
    }
    catch(error){
        console.log(error);   
    }
}
export async function getInPokemonEspecifico(dispatch:any , url:string ,navigate:any) {
    // console.log(url.substr(26))
    try{
        const {data} = await apiPokedex.get(`/${url.substr(26)}`)
        console.log(data)
        const setArrayDetalhes = {
            type:'SET_POKEMON',
            pokemon:data.results
        }
        dispatch(setArrayDetalhes);
        navigate(`detail/${url.split('/')[6]}`)
    }
    catch(error){
        console.log(error);   
    }
}

export async function getSearchByInput(dispatch:any ,pokemons:any , nomeInput:string) {
   const pokemonsByInput = pokemons.filter((pokemon:any) => 
        pokemon.name === nomeInput
    )
    const setArray = {
        type:'SET_LIST',
        listPokemon:pokemonsByInput
    }
    if(pokemonsByInput.length != 0){
        dispatch(setArray)
    }else
    {
        alert('Nenhum pokemon encontrado')
        getInPokemons(dispatch)
    }
    
}
