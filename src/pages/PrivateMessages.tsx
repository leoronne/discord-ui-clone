import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Send } from 'styled-icons/material';
import { privateUsers, UserProfileData } from '../data/userProfiles';
import { mockUsers, MockUser } from '../data/mockUsers';
import ChannelMessage from '../components/ChannelMessage';
import UserProfilePopup from '../components/UserProfilePopup';

const PageContainer = styled.div`
  min-height: 100%;
  padding: 20px 24px 0;
  background-color: var(--primary);
  color: var(--white);
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  padding: 5px;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  left: 0;
  right: 0;
  width: auto;
  z-index: 2;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
`;

const Messages = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

const ClickableAuthor = styled.button`
  background: none;
  border: 0;
  padding: 0;
  color: var(--white);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: text-decoration-color 0.15s ease;
  text-decoration: underline;
  text-decoration-color: transparent;

  &:hover {
    text-decoration-color: var(--white);
  }
`;

const MessageWrapper = styled.div`
  padding: 5px 0;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Similar to UserList hover effect */
  }
`;

interface PrivateMessagesPageProps {
  selectedUser: UserProfileData | null;
  onUserSelect: (user: UserProfileData | null) => void;
}

const chatFeed = [
  { userId: 'log', text: 'Hiiiiiii!', date: '10/01/2026 - 10:00 AM' },
  { userId: 'golddragon', text: 'hi, how r u?', date: '10/01/2026  - 10:01 AM' },
  { userId: 'log', text: "I'm pretty good! I love private messages on Discord 2.0", date: '10/01/2026 - 10:02 AM' },
  { userId: 'golddragon', text: 'what a coincidence I also love private messages on Discord 2.0', date: '10/01/2026 - 10:03 AM' },
  { userId: 'golddragon', text: 'my favorite part is that the UI follows so many HCI principles', date: '10/01/2026 - 10:04 AM' },
  { userId: 'log', text: "Omg YES I'm always saying this", date: '10/01/2026 - 10:05 AM' },
  { userId: 'log', text: "I can't believe how intuitive and user-friendly the interface is", date: '10/01/2026 - 10:06 AM' },
  { userId: 'golddragon', text: "same here, it's like they really understand how users interact with messaging apps", date: '10/01/2026 - 10:07 AM' },
  { userId: 'log', text: 'Oh hey btw', date: '10/02/2026 - 7:00 PM' },
  { userId: 'log', text: "What's your favorite color", date: '10/02/2026 - 7:09 PM' },
  { userId: 'golddragon', text: 'blue', date: '10/02/2026 - 10:10 PM' },
  { userId: 'golddragon', text: 'hbu', date: '10/02/2026 - 10:11 PM' },
  { userId: 'log', text: 'Probably green', date: '10/02/2026 - 10:12 PM' },
];

const PrivateMessagesPage: React.FC<PrivateMessagesPageProps> = ({ selectedUser, onUserSelect }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const [popupUser, setPopupUser] = React.useState<MockUser | null>(null);
  const [popupPosition, setPopupPosition] = React.useState({ top: 120, left: 120 });

  // Automatically display the chat partner's profile in the right sidebar
  useEffect(() => {
    const chatPartnerUser = privateUsers.find((user) => user.id === 'log');
    if (chatPartnerUser && !selectedUser) {
      onUserSelect(chatPartnerUser);
    }
  }, []);

  useEffect(() => {
    if (!selectedUser) {
      return undefined;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onUserSelect(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedUser, onUserSelect]);

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [chatFeed]);

  const openProfilePopup = (
    username: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const matched = mockUsers.find((user) => user.name === username);
    const fallback: MockUser = {
      id: `unknown-${username.toLowerCase().replace(/\s+/g, '-')}`,
      name: username,
      nickname: username,
      pronouns: 'Unknown',
      description: 'No profile details yet.',
      mutualFriends: 0,
      mutualServers: 0,
      status: 'offline',
    };
    const rect = event.currentTarget.getBoundingClientRect();
    const top = Math.min(Math.max(8, rect.top - 40), Math.max(8, window.innerHeight - 420 - 8));
    const left = Math.min(rect.right + 12, Math.max(8, window.innerWidth - 300 - 8));
    setPopupPosition({ top, left });
    setPopupUser(matched || fallback);
  };

  return (
    <>
      <Container>
        <Send size={14} color="var(--white)" />
        <Title>Chat with Log</Title>
      </Container>
      <PageContainer>
        <Messages>
          {chatFeed.map((item) => {
            const user = privateUsers.find((entry) => entry.id === item.userId);
            if (!user) return null;

            return (
              <MessageWrapper key={`${item.userId}-${item.text}`}>
                <ChannelMessage
                  author={(
                    <ClickableAuthor type="button" onClick={(event) => openProfilePopup(user.username, event)}>
                      {user.username}
                    </ClickableAuthor>
                  )}
                  date={item.date}
                  content={item.text}
                  avatar={user.avatar}
                />
              </MessageWrapper>
            );
          })}
        </Messages>
      </PageContainer>
      {popupUser ? (
        <UserProfilePopup
          user={popupUser}
          position={popupPosition}
          onClose={() => setPopupUser(null)}
          onMessageUser={() => setPopupUser(null)}
        />
      ) : null}
    </>
  );
};

export default PrivateMessagesPage;
