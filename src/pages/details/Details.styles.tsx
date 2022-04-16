import styled from "styled-components";

export const DetailsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const ColorTypes = styled.div<{
  width?: string,
  padding?: string,
  bradius?: string,
  margin?: string,
  talign?: string,
}>`
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: ${props => props.bradius};
  text-align: ${props => props.talign};
  background-color: ${(props: any) => {
    switch(props.color) {
      case 'bug':
        return '#91C12F';

      case 'dark':
        return '#5A5465';

      case 'dragon':
        return '#0B6DC3';

      case 'electric':
        return '#F4D23C';

      case 'fairy':
        return '#EC8FE6';

      case 'fighting':
        return '#CE416B';

      case 'fire':
        return '#FF9D55';

      case 'flying':
        return '#89AAE3';

      case 'ghost':
        return '#5269AD';

      case 'grass':
        return '#63BC5A';

      case 'ground':
        return '#D97845';

      case 'ice':
        return '#73CEC0';

      case 'normal':
        return '#919AA2';

      case 'poison':
        return '#B567CE';

      case 'psychic':
        return '#FA7179';

      case 'rock':
        return '#C5B78C';

      case 'steel':
        return '#5A8EA2';

      case 'water':
        return '#6493EB';
        
        
    }
  }};
`;

export const AboutContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 4px;
  
`;

export const DivFlex = styled.div<{
  display?: string,
  juscont?: string,
  alitems?: string,
  gap?: string,
  color?: string,
  padding?: string,
}>`
  
  display: ${props => props.display};
  justify-content: ${props => props.juscont};
  align-items: ${props => props.alitems};
  gap: ${props => props.gap};
  color: ${props => props.color};
  padding: ${props => props.padding};
`;

export const SpanType = styled.span`
  color: white;
`;

export const TitlesDesc = styled.h3`
  color: ${(props: any) => {
    switch(props.color) {
      case 'bug':
        return '#91C12F';

      case 'dark':
        return '#5A5465';

      case 'dragon':
        return '#0B6DC3';

      case 'electric':
        return '#F4D23C';

      case 'fairy':
        return '#EC8FE6';

      case 'fighting':
        return '#CE416B';

      case 'fire':
        return '#FF9D55';

      case 'flying':
        return '#89AAE3';

      case 'ghost':
        return '#5269AD';

      case 'grass':
        return '#63BC5A';

      case 'ground':
        return '#D97845';

      case 'ice':
        return '#73CEC0';

      case 'normal':
        return '#919AA2';

      case 'poison':
        return '#B567CE';

      case 'psychic':
        return '#FA7179';

      case 'rock':
        return '#C5B78C';

      case 'steel':
        return '#5A8EA2';

      case 'water':
        return '#6493EB';
        
        
    }
    }};
  text-align: center;
`;

export const ParagrafDesc = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;