import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChannelMessage from '../components/ChannelMessage';
import UserProfile from '../components/UserProfile';
import { privateUsers, UserProfileData } from '../data/userProfiles';

const PageContainer = styled.div`
  min-height: 100%;
  padding: 20px 24px;
  background-color: var(--primary);
  color: var(--white);
  position: relative;
`;

const SectionTitle = styled.h3`
  margin: 0 0 16px;
  font-weight: 600;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PageText = styled.p`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

const ClickHint = styled.p`
  margin-top: 18px;
  color: var(--gray);
  font-size: 13px;
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
`;

interface PrivateMessagesPageProps {
  selectedUser: UserProfileData | null;
  onUserSelect: (user: UserProfileData | null) => void;
}

const chatFeed = [
  { userId: 'bazingasdead', text: 'Hey, can we sync on the profile card update?' },
  { userId: 'golddragon', text: 'Sure. I already wired the right sidebar variant.' },
  { userId: 'lilith', text: 'Perfect, click my name to preview the popup profile.' },
  { userId: 'thrishadugg', text: 'I pushed hover state polish for the resize handles.' },
];

const PrivateMessagesPage: React.FC<PrivateMessagesPageProps> = ({ selectedUser, onUserSelect }) => {
  const popupRef = useRef<HTMLDivElement>(null);

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

  const clearSelectedUser = () => onUserSelect(null);

  return (
    <PageContainer>
      <SectionTitle>Private Messages</SectionTitle>
      <Messages>
        {chatFeed.map((item) => {
          const user = privateUsers.find((entry) => entry.id === item.userId);
          if (!user) return null;

          return (
            <div key={`${item.userId}-${item.text}`} onClick={() => onUserSelect(user)}>
              <ChannelMessage
                author={<ClickableAuthor type="button" onClick={() => onUserSelect(user)}>{user.username}</ClickableAuthor>}
                date="Today"
                content={item.text}
                avatar={user.avatar}
              />
            </div>
          );
        })}
      </Messages>
      <ClickHint>Click a username in messages to open the user profile popup.</ClickHint>
      {selectedUser && (
        <UserProfile
          user={selectedUser}
          mode="popup"
          popupRef={popupRef}
          onClose={clearSelectedUser}
        />
      )}
    </PageContainer>
  );
};

export default PrivateMessagesPage;
