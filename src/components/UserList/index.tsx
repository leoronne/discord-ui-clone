import React from 'react';

import bazinga from '~/assets/img/thukuna.jpg';
import cyhi from '~/assets/img/cyhi.jpg';
import user1 from '~/assets/img/user1.jpg';
import user2 from '~/assets/img/user2.jpg';
import user3 from '~/assets/img/user3.jpg';
import user4 from '~/assets/img/user4.jpg';
import user5 from '~/assets/img/user5.jpg';
import idk from '~/assets/img/discord_logo_clone.jpeg';
import user7 from '~/assets/img/pic7.jpeg';
import user8 from '~/assets/img/pic8.jpeg';
import user10 from '~/assets/img/pic10.jpeg';


import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  avatar?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, avatar, onClick }) => {
  return (
    <User onClick={onClick}>
      <Avatar className={isBot ? 'bot' : ''}>{avatar ? <img src={avatar} alt={nickname} className="user-avatar" /> : ''}</Avatar>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

interface UserListProps {
  onUserClick?: (nickname: string, event: React.MouseEvent<HTMLDivElement>) => void;
}

const UserList: React.FC<UserListProps> = ({ onUserClick }) => {
  const handleUserClick = (nickname: string) => (event: React.MouseEvent<HTMLDivElement>) => {
    onUserClick?.(nickname, event);
  };

  return (
    <Container>
      <Role>Online - 4</Role>
      <UserRow nickname="Bazingasdead" avatar={bazinga} onClick={handleUserClick('Bazingasdead')} />
      <UserRow nickname="GoldDragon" avatar={user2} onClick={handleUserClick('GoldDragon')} />
      <UserRow nickname="Lilith" avatar={cyhi} onClick={handleUserClick('Lilith')} />
      <UserRow nickname="Log" avatar={user5} onClick={handleUserClick('Log')} />
      <UserRow nickname="thrishadugg" avatar={idk} onClick={handleUserClick('thrishadugg')} />

      <Role>Offline - 17</Role>
      <UserRow nickname="Brock" avatar={user1} onClick={handleUserClick('Brock')} />
      <UserRow nickname="J. Bravo" avatar={user3} onClick={handleUserClick('J. Bravo')} />
      <UserRow nickname="Ronne12" avatar={user4} onClick={handleUserClick('Ronne12')} />
      <UserRow nickname="Prynce" avatar={user7} onClick={handleUserClick('Prynce')} />
      <UserRow nickname="Nyarth" avatar={user8} onClick={handleUserClick('Nyarth')} />
      <UserRow nickname="John Doe" avatar={user10} onClick={handleUserClick('John Doe')} />
      <UserRow nickname="Maria Ciclano" onClick={handleUserClick('Maria Ciclano')} />
      <UserRow nickname="H. Montanha" onClick={handleUserClick('H. Montanha')} />
      <UserRow nickname="James" onClick={handleUserClick('James')} />
      <UserRow nickname="Enzo João" onClick={handleUserClick('Enzo João')} />
      <UserRow nickname="Valentina de Jesus" onClick={handleUserClick('Valentina de Jesus')} />
      <UserRow nickname="Enzo José" onClick={handleUserClick('Enzo José')} />
      <UserRow nickname="Valentina Maria" onClick={handleUserClick('Valentina Maria')} />
      <UserRow nickname="Brunno Enzo" onClick={handleUserClick('Brunno Enzo')} />
      <UserRow nickname="Lara" onClick={handleUserClick('Lara')} />
      <UserRow nickname="Lohaine" onClick={handleUserClick('Lohaine')} />
      <UserRow nickname="Lika" onClick={handleUserClick('Lika')} />
    </Container>
  );
};

export default UserList;
