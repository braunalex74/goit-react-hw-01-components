import styled from 'styled-components';

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  margin: 0 auto;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 340px;

  box-shadow: -1px -1px 1px ${props => props.theme.colors.white},
    1px 1px 1px ${props => props.theme.colors.img};
  background-color: ${props => props.theme.colors.primary};
`;

export const Status = styled.span`
  display: block;
  margin-left: 20px;
  width: 16px;
  height: 16px;
  border-radius: ${props => props.theme.rad.round};
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;

  border-radius: ${props => props.theme.rad.m};
  border: ${props => props.theme.bord.normal};
  border-color: ${props => props.theme.colors.img};
`;

export const Name = styled.p`
  margin-left: 10px;
  color: ${props => props.theme.colors.text};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: 700;
`;
