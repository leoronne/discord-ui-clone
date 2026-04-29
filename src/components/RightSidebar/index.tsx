import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RightSidebarStyled, ResizeHandle } from './styles';
import UserProfile from '../UserProfile';
import UserList from '../UserList';
import { UserProfileData, privateUsers } from '../../data/userProfiles';
import UserProfilePopup from '../UserProfilePopup';
import { mockUsers, MockUser } from '../../data/mockUsers';
import { Container, Role, User, Avatar } from '../UserList/styles';

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

interface Props {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  activeNav: string;
  selectedUser: UserProfileData | null;
  selectedGroupId: string | null;
  onOpenPrivateMessage: (user: UserProfileData) => void;
  highlightedUserName?: string | null;
}

const MIN_WIDTH = 150;
const MAX_WIDTH = 400;
const DEFAULT_WIDTH = 240;
const POPUP_WIDTH = 300;
const POPUP_MARGIN = 12;
const POPUP_HEIGHT = 420;

const getSidebarAvatarSrc = (username: string) => {
  switch (username) {
    case 'Bazingasdead':
      return bazinga;
    case 'GoldDragon':
      return user2;
    case 'Lilith':
      return cyhi;
    case 'Log':
      return user5;
    case 'thrishadugg':
      return idk;
    case 'Brock':
      return user1;
    case 'J. Bravo':
      return user3;
    case 'Ronne12':
      return user4;
    case 'Prynce':
      return user7;
    case 'Nyarth':
      return user8;
    default:
      return undefined;
  }
};

const RightSidebar: React.FC<Props> = ({
  width,
  setWidth,
  activeNav,
  selectedUser,
  selectedGroupId,
  onOpenPrivateMessage,
  highlightedUserName,
}) => {
  const cleanupRef = useRef<(() => void) | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const previousWidthRef = useRef<number>(DEFAULT_WIDTH);
  const widthRef = useRef<number>(width);
  const [popupUser, setPopupUser] = useState<MockUser | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 120, left: 120 });

  useEffect(() => {
    widthRef.current = width;
  }, [width]);

  useEffect(() => {
    if (activeNav === 'private') {
      setPopupUser(null);
    }
  }, [activeNav]);

  useEffect(() => {
    setPopupUser(null);
  }, [selectedGroupId]);

  const stopResize = useCallback(() => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
  }, []);

  useEffect(() => () => stopResize(), [stopResize]);

  const handleResizeStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    let collapsedDuringDrag = false;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const sidebarBounds = sidebarRef.current?.getBoundingClientRect();
      if (!sidebarBounds) return;

      const rightOffset = window.innerWidth - sidebarBounds.right;
      let nextWidth = window.innerWidth - moveEvent.clientX - rightOffset;

      if (nextWidth < MIN_WIDTH) {
        if (widthRef.current >= MIN_WIDTH) {
          previousWidthRef.current = Math.min(MAX_WIDTH, widthRef.current);
        }
        collapsedDuringDrag = true;
        setWidth(0);
        return;
      }

      if ((widthRef.current === 0 || collapsedDuringDrag) && nextWidth >= MIN_WIDTH) {
        nextWidth = previousWidthRef.current || DEFAULT_WIDTH;
        collapsedDuringDrag = false;
      }

      const clampedWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, nextWidth));
      previousWidthRef.current = clampedWidth;
      setWidth(clampedWidth);
    };

    const onMouseUp = () => {
      stopResize();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    cleanupRef.current = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  };

  const openPopupForUser = (
    user: MockUser,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rowRect = event.currentTarget.getBoundingClientRect();
    const sidebarRect = sidebarRef.current?.getBoundingClientRect();

    if (!sidebarRect) {
      return;
    }

    const top = Math.min(
      Math.max(8, rowRect.top - 40),
      Math.max(8, window.innerHeight - POPUP_HEIGHT - 8)
    );
    const left = Math.max(8, sidebarRect.left - POPUP_WIDTH - POPUP_MARGIN);

    setPopupPosition({ top, left });
    setPopupUser(user);
  };

  const sidebarUsers = activeNav === 'groups' ? mockUsers : mockUsers;
  const onlineUsers = sidebarUsers.filter((user) => user.status === 'online');
  const offlineUsers = sidebarUsers.filter((user) => user.status === 'offline');

  const toProfileData = (user: MockUser): UserProfileData => {
    const existingUser = privateUsers.find((entry) => entry.username === user.name);
    if (existingUser) {
      return existingUser;
    }

    return {
      id: user.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, ''),
      username: user.name,
      status: user.status,
      bio: user.description,
    };
  };

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  const renderUserRow = (user: MockUser) => {
    const avatarSrc = getSidebarAvatarSrc(user.name);
    return (
      <User
        key={user.id}
        onClick={(event) => openPopupForUser(user, event)}
        style={highlightedUserName === user.name ? { background: 'rgba(255, 255, 255, 0.12)' } : undefined}
      >
        <Avatar>
          {avatarSrc ? (
            <img src={avatarSrc} alt={user.name} className="user-avatar" />
          ) : (
            getInitials(user.name)
          )}
        </Avatar>
        <strong>{user.name}</strong>
      </User>
    );
  };

  const handleServerSidebarUserClick = (
    nickname: string,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const matched = mockUsers.find((user) => user.name === nickname);
    const fallback: MockUser = {
      id: `unknown-${nickname.toLowerCase().replace(/\s+/g, '-')}`,
      name: nickname,
      nickname,
      pronouns: 'Unknown',
      description: 'No profile details yet.',
      mutualFriends: 0,
      mutualServers: 0,
      status: 'offline',
    };
    openPopupForUser(matched || fallback, event);
  };

  let sidebarContent = (
    <Container>
      <Role>
        Online -
        {' '}
        {onlineUsers.length}
      </Role>
      {onlineUsers.map((user) => renderUserRow(user))}
      <Role>
        Offline -
        {' '}
        {offlineUsers.length}
      </Role>
      {offlineUsers.map((user) => renderUserRow(user))}
    </Container>
  );

  if (activeNav === 'private') {
    sidebarContent = <UserProfile user={selectedUser} mode="sidebar" />;
  } else if (activeNav === 'servers') {
    sidebarContent = <UserList onUserClick={handleServerSidebarUserClick} />;
  }

  return (
    <RightSidebarStyled
      ref={sidebarRef}
      $width={width}
      $hasSelectedUser={activeNav === 'private' && Boolean(selectedUser)}
      $isEmptyState={activeNav === 'private' && !selectedUser}
    >
      <ResizeHandle onMouseDown={handleResizeStart} role="separator" aria-label="Resize right sidebar" />
      {sidebarContent}
      {popupUser && activeNav !== 'private' ? (
        <UserProfilePopup
          user={popupUser}
          position={popupPosition}
          onClose={() => setPopupUser(null)}
          onMessageUser={(user) => {
            onOpenPrivateMessage(toProfileData(user));
            setPopupUser(null);
          }}
        />
      ) : null}
    </RightSidebarStyled>
  );
};

export default RightSidebar;