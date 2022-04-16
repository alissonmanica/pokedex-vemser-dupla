import { useEffect} from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { firstLetterUpper } from "../../Utils"
import { newGetPokemon } from "../../store/actions/ActionsPokemons"
import Loading from "../../components/loading/Loading"
import {
  DivFlex,
  SpanDesc,
  ColorTypes,
  ParagrafDesc,
  AboutContainer,
  DetailsContainer
} from "./Details.styles"

function Details({pokemon, token, dispatch}: any) {
const {idPokemon}: any = useParams()
const {id, abilities, name, weight, height, types, stats, sprites} = pokemon

  useEffect(() => {
    if(pokemon) {
      newGetPokemon(dispatch, idPokemon)
    }
  },[])

  if (token) {
    return (<Loading />)
  }

  return (
    <DetailsContainer>
      <ColorTypes color={types[0].type.name} width="500px" bradius="12px" margin="10px">
        <DivFlex display="flex" juscont="space-between" alitems="center" color="white" padding="0px 40px">
          <h1>{firstLetterUpper(name)}</h1>
          <p>#{id <= 99 ? '0' + id : id }</p>
        </DivFlex>
        <img src={sprites.front_default} alt="sprite-pokemon" />
        <AboutContainer>
          <div>         
            <DivFlex display="flex" juscont="center" gap="20px" >{types.map((item: any, index: number) => (  
                <ColorTypes color={types[index].type.name} width="50px" bradius="30px" padding="6px 10px" talign="center" key={index}>
                  <SpanDesc size="14px" color="white" >{firstLetterUpper(item.type.name)}</SpanDesc>
                </ColorTypes>
              ))}
            </DivFlex>

            <ParagrafDesc display="flex" justcontent="center" size="18px" color={types[0].type.name} >About</ParagrafDesc>

            <DivFlex display="flex" juscont="space-evenly">
              <DivFlex><ParagrafDesc size="14px" display="flex" flexdirect="column">{weight}<small>Weight</small></ParagrafDesc></DivFlex>
              <DivFlex><ParagrafDesc size="14px" display="flex" flexdirect="column">{height}<small>Height</small></ParagrafDesc></DivFlex>
              <DivFlex>{abilities.map((item: any, index: number) => (
                  <ParagrafDesc size="12px" key={index}>
                    <span>{firstLetterUpper(item.ability.name)}</span>
                  </ParagrafDesc>
                ))}
                <SpanDesc size="10px" >moves</SpanDesc>
              </DivFlex>
            </DivFlex>
          </div>
          <div>
              <ParagrafDesc display="flex" justcontent="center" size="18px" color={types[0].type.name}>Base Stats</ParagrafDesc>
              <DivFlex>
                <ParagrafDesc size="12px" color={types[0].type.name} >HP: <SpanDesc color="black">{stats[0].base_stat}</SpanDesc></ParagrafDesc>
                <ParagrafDesc size="12px" color={types[0].type.name} >ATK: <SpanDesc color="black">{stats[1].base_stat}</SpanDesc></ParagrafDesc>
                <ParagrafDesc size="12px" color={types[0].type.name} >DEF: <SpanDesc color="black">{stats[2].base_stat}</SpanDesc></ParagrafDesc>
                <ParagrafDesc size="12px" color={types[0].type.name} >SATK: <SpanDesc color="black">{stats[3].base_stat}</SpanDesc></ParagrafDesc>
                <ParagrafDesc size="12px" color={types[0].type.name} >SDEF: <SpanDesc color="black">{stats[4].base_stat}</SpanDesc></ParagrafDesc>
                <ParagrafDesc size="12px" color={types[0].type.name} >SPD: <SpanDesc color="black">{stats[5].base_stat}</SpanDesc></ParagrafDesc>
              </DivFlex>
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