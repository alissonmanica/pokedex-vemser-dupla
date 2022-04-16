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

export async function getSearchByInput(dispatch:any ,pokemons:any , nomeInput:string) {
   const pokemonsByInput = pokemons.filter((pokemon:any) => 
        pokemon.name === nomeInput
    )
    const setArray = {
        type:'SET_LIST',
        listPokemon:pokemonsByInput
    }
    if(pokemonsByInput.length !== 0){
        dispatch(setArray)
    }else
    {
        alert('Nenhum pokemon encontrado')
        getInPokemons(dispatch)
    }
    
}
export async function newGetPokemon(dispatch:any , idPokemon: string) {
    try{
        const {data} = await apiPokedex.get(`/pokemon/${idPokemon}`)
        console.log(data)
        const setArrayDetalhes = {
            type: 'SET_POKEMON',
            pokemon: data,
            token: false
        }
        dispatch(setArrayDetalhes);
    }
    catch(error){
        console.log(error);   
    }
}

// async function getAllPoke(dispatch: any, id: string, pokemon: any) {

//     try {
//         const {data} = await apiPokedex.get(`/pokemon-species/${id}`)
//         const allPoke = {
//             type: 'SET_ALL',
//             pokemons: data
//         }
//         dispatch(allPoke);
//     } catch (error) {
//         console.log(error)
//     }
// }

// export function executeGetAll() {
    
// }