import styled from 'styled-components';
import { getRandomHexColor } from './randomcolor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[3]}px;
  max-width: 100%;
  width: 360px;

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 10px;
`;

export const Title = styled.h2`
  padding: ${props => props.theme.space[1]}px;

  border-bottom: 1px solid #d3d5e3;
  color: ${props => props.theme.colors.accent};
  text-shadow: 1px 1px 1px #fff;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};

  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: ${props => props.theme.space[3]}px;

  width: 100%;
  height: 100%;

  text-shadow: 0 0 1px #000;

  :first-child {
    border-bottom-left-radius: ${props => props.theme.rad.m};
  }

  :last-child {
    border-bottom-right-radius: ${props => props.theme.rad.m};
  }

  background-color: ${props => getRandomHexColor(props.index)};
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.x};
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
`;
