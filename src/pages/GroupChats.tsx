import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { People, Search, PersonAddAlt, Group, ArrowBack } from 'styled-icons/material';
import ChannelMessage from '../components/ChannelMessage';
import { groupChats } from '../data/groupChats';
import UserProfilePopup from '../components/UserProfilePopup';
import { mockUsers, MockUser } from '../data/mockUsers';

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

const PageContainer = styled.div`
  min-height: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const EmptyState = styled.div`
  max-width: 460px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const EmptyIcon = styled(People)`
  width: 72px;
  height: 72px;
  color: var(--gray);
  margin-bottom: 18px;
`;

const Heading = styled.h1`
  color: var(--white);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 10px;
`;

const Subtext = styled.p`
  color: var(--gray);
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 14px;
`;

const EmptySearch = styled.input`
  width: 100%;
  max-width: 360px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--chat-input);
  color: var(--white);
  padding: 0 12px;
  font-size: 14px;

  &::placeholder {
    color: var(--gray);
  }
`;

const ChatHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  color: var(--gray);
  cursor: pointer;
  margin-right: 8px;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: var(--quinary);
    color: var(--white);
  }
`;

const GroupAvatar = styled.div<{ $bg: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  background-color: ${({ $bg }) => $bg};
`;

const HeaderTitle = styled.strong`
  margin-left: 10px;
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HeaderMeta = styled.span`
  margin-left: 10px;
  color: var(--gray);
  font-size: 13px;
  white-space: nowrap;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 12px;
`;

const HeaderIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  color: var(--gray);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: var(--quinary);
    color: var(--white);
  }
`;

const Messages = styled.div`
  width: 100%;
  flex: 1;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

const ClickableAuthor = styled.button`
  background: none;
  border: 0;
  padding: 0;
  color: var(--white);
  font: inherit;
  cursor: pointer;
  transition: text-decoration-color 0.15s ease;
  text-decoration: underline;
  text-decoration-color: transparent;

  &:hover {
    text-decoration-color: var(--white);
  }
`;

interface GroupChatsPageProps {
  selectedGroupId: string | null;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onBack: () => void;
  onHighlightUser: (name: string | null) => void;
}

const avatarByName: Record<string, string | undefined> = {
  Bazingasdead: bazinga,
  GoldDragon: user2,
  Lilith: cyhi,
  Log: user5,
  thrishadugg: idk,
  Brock: user1,
  'J. Bravo': user3,
  Ronne12: user4,
  Prynce: user7,
  Nyarth: user8,
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const GroupChatsPage: React.FC<GroupChatsPageProps> = ({
  selectedGroupId,
  searchTerm,
  onSearchChange,
  onBack,
  onHighlightUser,
}) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const [popupUser, setPopupUser] = React.useState<MockUser | null>(null);
  const [popupPosition, setPopupPosition] = React.useState({ top: 120, left: 120 });
  const selectedGroup = useMemo(
    () => groupChats.find((group) => group.id === selectedGroupId),
    [selectedGroupId]
  );

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [selectedGroup]);

  const closePopup = () => {
    setPopupUser(null);
    onHighlightUser(null);
  };

  const onAuthorClick = (sender: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const matched = mockUsers.find((user) => user.name === sender);
    const fallback: MockUser = {
      id: `unknown-${sender.toLowerCase().replace(/\s+/g, '-')}`,
      name: sender,
      nickname: 'Unknown',
      pronouns: 'Unknown',
      description: 'Unknown',
      mutualFriends: 0,
      mutualServers: 0,
      status: 'offline',
    };
    const chosen = matched || fallback;
    const rect = event.currentTarget.getBoundingClientRect();
    const top = Math.min(Math.max(8, rect.top - 40), Math.max(8, window.innerHeight - 420 - 8));
    const left = Math.min(rect.right + 12, Math.max(8, window.innerWidth - 300 - 8));
    setPopupPosition({ top, left });
    setPopupUser(chosen);
    onHighlightUser(chosen.name);
  };

  if (!selectedGroup) {
    return (
      <PageContainer>
        <EmptyState>
          <EmptyIcon />
          <Heading>Your Group Chats</Heading>
          <Subtext>
            Select a group chat from the sidebar or create a new one to get started.
          </Subtext>
          <EmptySearch
            placeholder="Search your group chats..."
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </EmptyState>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ChatHeader>
        <HeaderLeft>
          <BackButton type="button" aria-label="Back to group chats" onClick={onBack}>
            <ArrowBack size={18} />
          </BackButton>
          <GroupAvatar $bg={selectedGroup.avatarColor}>{getInitials(selectedGroup.name)}</GroupAvatar>
          <HeaderTitle>{selectedGroup.name}</HeaderTitle>
          <HeaderMeta>
            {selectedGroup.members}
            {' members'}
          </HeaderMeta>
        </HeaderLeft>
        <HeaderActions>
          <HeaderIconButton type="button" aria-label="Search group chat messages">
            <Search size={18} />
          </HeaderIconButton>
          <HeaderIconButton type="button" aria-label="Add member">
            <PersonAddAlt size={18} />
          </HeaderIconButton>
          <HeaderIconButton type="button" aria-label="Toggle members list">
            <Group size={18} />
          </HeaderIconButton>
        </HeaderActions>
      </ChatHeader>
      <Messages ref={messagesRef}>
        {selectedGroup.messages.map((message) => (
          <ChannelMessage
            key={`${selectedGroup.id}-${message.sender}-${message.timestamp}`}
            author={(
              <ClickableAuthor type="button" onClick={(event) => onAuthorClick(message.sender, event)}>
                {message.sender}
              </ClickableAuthor>
            )}
            date={message.timestamp}
            content={message.text}
            avatar={avatarByName[message.sender]}
          />
        ))}
      </Messages>
      {popupUser ? (
        <UserProfilePopup
          user={popupUser}
          position={popupPosition}
          onClose={closePopup}
          onMessageUser={() => closePopup()}
        />
      ) : null}
    </PageContainer>
  );
};

export default GroupChatsPage;
