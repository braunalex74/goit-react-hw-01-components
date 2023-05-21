import React from 'react';
import { FriendsListItem } from './FriendListItem';
import { FriendsList } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};

// import { FriendListItem, Status, Image, Name } from './FriendList.styled';

// export const FriendList = ({ friends }) => {
//   return (
//     <FriendList>
//       {friends.map(friend => (
//         <FriendListItem>
//           key={friend.id}
//           id={friend.id}
//           <Status>{friend.isOnline}</Status>
//           <Image>{friend.avatar}</Image>
//           <Name>{friend.name}</Name>{' '}
//         </FriendListItem>
//       ))}
//     </FriendList>
//   );
// };

// import { Name, Avatar, Status } from './FriendList.styled';

// export const FriendList = ({ friends }) => {
//   return FriendList.map(friends => {
//     return (
//       <FriendList>
//         <FriendItem>
//           <div key={friend.id}>
//             <li class="item">
//               <Status>
//                 <span class="status">{friend.isOnline}</span>
//               </Status>
//               <Img>
//                 <img
//                   class="avatar"
//                   src={friend.avatar}
//                   alt={friend.name}
//                   width="48"
//                 />
//               </Img>
//               <Name>
//                 <p class="name">{friend.name}</p>
//               </Name>
//             </li>
//           </div>
//         </FriendItem>
//       </FriendList>
//     );
//   });
// };
