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
      <UserRow nickname="Bazingasdead" avatar={bazinga} />
      <UserRow nickname="GoldDragon" avatar={user2} />
      <UserRow nickname="Lilith" avatar={cyhi} />
      <UserRow nickname="Log" avatar={user5} />
      <UserRow nickname="thrishadugg" avatar={idk} />

      <Role>Offline - 17</Role>
      <UserRow nickname="Brock" avatar={user1} />
      <UserRow nickname="J. Bravo" avatar={user3} />
      <UserRow nickname="Ronne12" avatar={user4} />
      <UserRow nickname="Prynce" avatar={user7} />
      <UserRow nickname="Nyarth" avatar={user8} /> 
      <UserRow nickname="John Doe" avatar={user10} />
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
