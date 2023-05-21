import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 100%;
  box-shadow: -0.0625rem -0.0625rem 0.0625rem ${props => props.theme.colors.white},
    0.0625rem 0.0625rem 0.0625rem ${props => props.theme.colors.img};
`;

export const Thead = styled.thead`
  background-color: ${props => props.theme.colors.background};

  text-shadow: 0.0625rem 0.0625rem 0.0625rem
    ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  background-color: rgb(115, 120, 175);
  color: ${props => props.theme.colors.white};
  text-shadow: 0.0625rem 0.0625rem 0.0625rem ${props => props.theme.colors.th};
`;

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: ${props => props.theme.space[3]}px;
  text-align: left;
`;

export const Tbody = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const Td = styled.td`
  padding-left: ${props => props.theme.space[3]}px;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;

export const ExtTr = styled(Tr)`
  background-color: ${props =>
    props.id_index % 2 === 0 ? props.theme.colors.img : 'transparent'};
`;
