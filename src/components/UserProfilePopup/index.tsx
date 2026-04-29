import React from 'react';
import { Person, ViewModule } from 'styled-icons/material';
import { MockUser } from '../../data/mockUsers';
import {
  Overlay,
  PopupCard,
  Banner,
  Body,
  AvatarWrap,
  Avatar,
  StatusDot,
  UserInfo,
  Name,
  Meta,
  Section,
  SectionTitle,
  MutualItem,
  AboutText,
  MessageButton,
} from './styles';

interface PopupPosition {
  top: number;
  left: number;
}

interface UserProfilePopupProps {
  user: MockUser;
  position: PopupPosition;
  onClose: () => void;
  onMessageUser: (user: MockUser) => void;
}

const bannerColors = [
  '#5865F2',
  '#57F287',
  '#FEE75C',
  '#EB459E',
  '#ED4245',
  '#1ABC9C',
  '#E67E22',
  '#9B59B6',
  '#2ECC71',
  '#E74C3C',
];

const getBannerColor = (name: string) => bannerColors[name.charCodeAt(0) % bannerColors.length];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const UserProfilePopup: React.FC<UserProfilePopupProps> = ({
  user,
  position,
  onClose,
  onMessageUser,
}) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <PopupCard style={{ top: position.top, left: position.left }}>
        <Banner $color={getBannerColor(user.name)} />
        <Body>
          <AvatarWrap>
            <Avatar>{getInitials(user.name)}</Avatar>
            <StatusDot $status={user.status} />
          </AvatarWrap>

          <UserInfo>
            <Name>{user.name}</Name>
            <Meta>{user.nickname}</Meta>
            <Meta>{user.pronouns}</Meta>
          </UserInfo>

          <Section>
            <SectionTitle>Mutuals</SectionTitle>
            <MutualItem>
              <Person size={16} />
              <span>
                {user.mutualFriends}
                {' Mutual Friends'}
              </span>
            </MutualItem>
            <MutualItem>
              <ViewModule size={16} />
              <span>
                {user.mutualServers}
                {' Mutual Servers'}
              </span>
            </MutualItem>
          </Section>

          <Section>
            <SectionTitle>About Me</SectionTitle>
            <AboutText>{user.description}</AboutText>
          </Section>

          <MessageButton onClick={() => onMessageUser(user)}>
            Message @
            {user.name}
          </MessageButton>
        </Body>
      </PopupCard>
    </>
  );
};

export default UserProfilePopup;
