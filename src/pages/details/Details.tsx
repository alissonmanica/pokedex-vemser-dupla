import { useEffect} from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { newGetPokemon } from "../../store/actions/ActionsPokemons"
import {
  DivFlex,
  SpanType,
  TitlesDesc,
  ColorTypes,
  ParagrafDesc,
  AboutContainer,
  DetailsContainer
} from "./Details.styles"

function Details({pokemon, token, dispatch}: any) {
const {idPokemon}: any = useParams()
const {id, abilities, name, weight, height, types, stats, sprites} = pokemon

  function firstUpperString(props: string) {
    return props.charAt(0).toUpperCase() + props.slice(1);
};

  useEffect(() => {
    if(pokemon) {
      newGetPokemon(dispatch, idPokemon)
    }
  },[])

  if (token) {
    return (<h1>Loading...</h1>)
  }

  return (
    <DetailsContainer>
      <ColorTypes color={types[0].type.name} width="500px" bradius="12px" margin="10px">
        <DivFlex display="flex" juscont="space-between" alitems="center" color="white" padding="0px 40px">
          <h1>{firstUpperString(name)}</h1>
          <p>#{id}</p>
        </DivFlex>
        <img src={sprites.front_default} alt="sprite-pokemon" />
        <AboutContainer>
          <div>         
            <DivFlex display="flex" juscont="center" gap="20px" >{types.map((item: any, index: number) => (  
                <ColorTypes color={types[index].type.name} width="60px" bradius="30px" padding="6px 10px" talign="center" key={index}>
                  <SpanType>{firstUpperString(item.type.name)}</SpanType>
                </ColorTypes>
              ))}
            </DivFlex>

            <TitlesDesc color={types[0].type.name} >About</TitlesDesc>

            <DivFlex display="flex" juscont="space-evenly">
              <DivFlex><ParagrafDesc>{weight}<small>Weight</small></ParagrafDesc></DivFlex>
              <DivFlex><ParagrafDesc>{height}<small>Height</small></ParagrafDesc></DivFlex>
              <DivFlex>{abilities.map((item: any, index: number) => (
                  <ParagrafDesc key={index}>
                    <span>{firstUpperString(item.ability.name)}</span>
                  </ParagrafDesc>
                ))}
                <small>moves</small>
              </DivFlex>
            </DivFlex>
          </div>
          <div>
              <TitlesDesc color={types[0].type.name}>Base Stats</TitlesDesc>
              <div>
                <p>HP: <span>{stats[0].base_stat}</span></p>
                <p>ATK: <span>{stats[1].base_stat}</span></p>
                <p>DEF: <span>{stats[2].base_stat}</span></p>
                <p>SATK: <span>{stats[3].base_stat}</span></p>
                <p>SDEF: <span>{stats[4].base_stat}</span></p>
                <p>SPD: <span>{stats[5].base_stat}</span></p>
              </div>
          </div>
        </AboutContainer>
      </ColorTypes>
    </DetailsContainer>
  )
}

const mapStateToProps = (state: any) => ({
  pokemon: state.pokeReducer.pokemon,
  token: state.pokeReducer.token
})

export default connect(mapStateToProps)(Details)