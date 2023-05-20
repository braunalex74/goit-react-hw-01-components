import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[1]}px;
  padding: ${props => props.theme.space[1]}px;
  max-width: 100%;
  width: 350px;

  border-radius: ${props => props.theme.rad.medium};
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: ${props => props.theme.colors.primary};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 130px;
  border-radius: ${props => props.theme.rad.round};
  margin-top: 50px;
`;

export const Info = styled.p`
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xs};
  margin: 10px;
  padding: 0;
  list-style: none;
`;

export const Name = styled(Info)`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Tag = styled(Info)`
  color: ${props => props.theme.colors.text};
`;

export const Location = styled(Info)`
  color: ${props => props.theme.colors.text};
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space[1]}px;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  :not(:last-child) {
    border-right: 1px dotted ${props => props.theme.colors.primary};
  }
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.colors.text};
  font-size: 15px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 700;
`;

export const Quantity = styled(StatsInfo)`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 20px;
`;
