import styled from "styled-components";

export const TitlePokedex = styled.p<{
  colorLetra?: string,
}>`
  color: ${props => props.colorLetra};
`;