import React from 'react';
import defaultAvatar from '~/assets/img/discord_logo_clone.jpeg';
import { UserProfileData } from '../../data/userProfiles';
import {
  Card,
  Header,
  Avatar,
  Identity,
  Username,
  Status,
  Bio,
  SidebarContent,
  EmptyState,
  PopupOverlay,
  PopupCard,
  CloseButton,
} from './styles';

interface Props {
  user: UserProfileData | null;
  compact?: boolean;
  mode?: 'sidebar' | 'popup';
  onClose?: () => void;
  popupRef?: React.RefObject<HTMLDivElement>;
}

const UserProfile: React.FC<Props> = ({ user, compact, mode = 'popup', onClose, popupRef }) => {
  if (!user) {
    return <EmptyState>Select a user to view profile details.</EmptyState>;
  }

  const content = (
    <SidebarContent $mode={mode}>
      <Header>
        <Avatar src={user.avatar || defaultAvatar} alt={user.username} />
        <Identity>
          <Username $mode={mode}>{user.username}</Username>
          <Status $mode={mode} $status={user.status}>{user.status}</Status>
        </Identity>
      </Header>
      <Bio $mode={mode}>{user.bio}</Bio>
    </SidebarContent>
  );

  if (mode === 'popup') {
    return (
      <PopupOverlay>
        <PopupCard ref={popupRef} $mode="popup" $compact={compact ?? true}>
          <CloseButton type="button" onClick={onClose} aria-label="Close profile popup">
            ×
          </CloseButton>
          {content}
        </PopupCard>
      </PopupOverlay>
    );
  }

  return <Card $mode={mode} $compact={compact}>{content}</Card>;
};

export default UserProfile;
