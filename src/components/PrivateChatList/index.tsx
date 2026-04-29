import React from 'react';
import { MoreVert, Textsms as MessageBubbleIcon } from 'styled-icons/material';

import bazinga from '~/assets/img/thukuna.jpg';
import cyhi from '~/assets/img/cyhi.jpg';
import user1 from '~/assets/img/user1.jpg';
import user3 from '~/assets/img/user3.jpg';
import user4 from '~/assets/img/user4.jpg';
import user5 from '~/assets/img/user5.jpg';
import {
  Container,
  SectionLabel,
  User,
  Avatar,
  UserMiddle,
  DisplayName,
  StatusLine,
  StatusDot,
  StatusText,
  RowActions,
  IconButton,
  BotTag,
  Separator,
} from './styles';
import { mockUsers } from '../../data/mockUsers';

type PresenceVariant = 'online' | 'offline' | 'idle';

const getPresence = (displayName: string): PresenceVariant => {
  const matched = mockUsers.find((u) => u.name === displayName);
  if (!matched) {
    return 'offline';
  }
  return matched.status === 'online' ? 'online' : 'offline';
};

const getStatusLabel = (variant: PresenceVariant) => {
  if (variant === 'online') {
    return 'Online';
  }
  if (variant === 'idle') {
    return 'Idle';
  }
  return 'Offline';
};

interface UserProps {
  nickname: string;
  isBot?: boolean;
  avatar?: string;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, avatar }) => {
  const presence = getPresence(nickname);
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}>
        {avatar ? <img src={avatar} alt={nickname} className="user-avatar" /> : null}
      </Avatar>

      <UserMiddle>
        <DisplayName>{nickname}</DisplayName>
        <StatusLine>
          <StatusDot $variant={presence} />
          <StatusText>{getStatusLabel(presence)}</StatusText>
        </StatusLine>
        {isBot ? <BotTag>Bot</BotTag> : null}
      </UserMiddle>

      <RowActions>
        <IconButton type="button" aria-label="Message">
          <MessageBubbleIcon size={14} />
        </IconButton>
        <IconButton type="button" aria-label="More actions">
          <MoreVert size={16} />
        </IconButton>
      </RowActions>
    </User>
  );
};

const PrivateChatList: React.FC = () => {
  return (
    <Container>
      <SectionLabel>Pinned</SectionLabel>
      <UserRow nickname="Bazingasdead" avatar={bazinga} />
      <UserRow nickname="Lilith" avatar={cyhi} />
      <UserRow nickname="Log" avatar={user5} />
      <UserRow nickname="thrishadugg" avatar={user4} />

      <Separator />

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

export default PrivateChatList;
