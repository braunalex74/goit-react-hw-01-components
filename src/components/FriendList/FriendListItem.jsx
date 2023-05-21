import React from 'react';
import { FriendListItem, Status, Image, Name } from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendsListItem>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsListItem>
  );
};
