import React from 'react';

import leoronne from '~/assets/img/avatar.jpg';
import cyhi from '~/assets/img/cyhi.jpg';
import user1 from '~/assets/img/user1.jpg';
import user2 from '~/assets/img/user2.jpg';
import user3 from '~/assets/img/user3.jpg';
import user4 from '~/assets/img/user4.jpg';
import user5 from '~/assets/img/user5.jpg';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  avatar?: string;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, avatar }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}>{avatar ? <img src={avatar} alt={nickname} className="user-avatar" /> : ''}</Avatar>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Online - 4</Role>
      <UserRow nickname="Leonardo Ronne" avatar={leoronne} />
      <UserRow nickname="Luiky" avatar={user2} />
      <UserRow nickname="Cyhi" isBot avatar={cyhi} />
      <UserRow nickname="Rocket" isBot avatar={user5} />

      <Role>Offline - 17</Role>
      <UserRow nickname="Brock" avatar={user1} />
      <UserRow nickname="J. Bravo" avatar={user3} />
      <UserRow nickname="Ronne12" avatar={user4} />
      <UserRow nickname="Prynce" />
      <UserRow nickname="Nyarth" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="Maria Ciclano" />
      <UserRow nickname="H. Montanha" />
      <UserRow nickname="James" />
      <UserRow nickname="Enzo João" />
      <UserRow nickname="Valentina de Jesus" />
      <UserRow nickname="Enzo José" />
      <UserRow nickname="Valentina Maria" />
      <UserRow nickname="Brunno Enzo" />
      <UserRow nickname="Lara" />
      <UserRow nickname="Lohaine" />
      <UserRow nickname="Lika" />
    </Container>
  );
};

export default UserList;
