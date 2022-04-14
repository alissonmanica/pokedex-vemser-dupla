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
    try{
        const {data} = await apiPokedex.get(`/${url.substr(26)}`)
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

export async function newGetPokemon(dispatch:any , id: string) {
    try{
        const {data} = await apiPokedex.get(`/pokemon/${id}`)
        console.log(data)
        const setArrayDetalhes = {
            type:'SET_POKEMON',
            pokemon:data.results
        }
        dispatch(setArrayDetalhes);
    }
    catch(error){
        console.log(error);   
    }
}