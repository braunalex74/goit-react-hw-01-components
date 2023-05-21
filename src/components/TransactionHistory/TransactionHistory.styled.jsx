import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;

  max-width: 100%;
  width: 100%;
  box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
`;

export const Thead = styled.thead`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.accent};
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  background-color: rgb(115, 120, 175);
  color: #ffffff;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #400075;
`;

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: ${props => props.theme.space[4]}px;
  text-align: left;
`;

export const Tbody = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const Td = styled.td`
  padding-left: ${props => props.theme.space[4]}px;
  border-right: 0.125rem solid #e9edff;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;

export const ExtTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
`;
