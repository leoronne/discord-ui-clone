import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MoreVert, NotificationsOff, PushPin } from 'styled-icons/material';
import {
  Container,
  GroupItem,
  Avatar,
  GroupContent,
  GroupName,
  MemberCount,
  MemberMeta,
  UnreadBadge,
  NoResults,
  PinMarker,
  ActionWrap,
  MoreButton,
  Menu,
  MenuItem,
  MutedIconWrap,
  InfoMessage,
} from './styles';
import { groupChats } from '../../data/groupChats';

export type GroupChatListProps = {
  selectedGroupId: string | null;
  onGroupSelect: (groupId: string) => void;
  dismissedUnreadByGroup?: Record<string, boolean>;
  searchTerm?: string;
  pinnedGroupIds?: string[];
  mutedGroupIds?: Record<string, boolean>;
  onTogglePin?: (groupId: string) => boolean;
  onToggleMute?: (groupId: string) => void;
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const GroupChatList: React.FC<GroupChatListProps> = ({
  selectedGroupId,
  onGroupSelect,
  dismissedUnreadByGroup,
  searchTerm,
  pinnedGroupIds,
  mutedGroupIds,
  onTogglePin,
  onToggleMute,
}) => {
  const dismissed = dismissedUnreadByGroup ?? {};
  const pinned = pinnedGroupIds ?? [];
  const muted = mutedGroupIds ?? {};
  const [openMenuFor, setOpenMenuFor] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMenuFor) return undefined;
    const onMouseDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpenMenuFor(null);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [openMenuFor]);

  const filtered = useMemo(() => {
    const term = (searchTerm || '').trim().toLowerCase();
    if (!term) return groupChats;
    return groupChats.filter((group) => group.name.toLowerCase().includes(term));
  }, [searchTerm]);

  const sortedChats = useMemo(() => {
    const pinnedSet = new Set(pinned);
    return [...filtered].sort((a, b) => {
      const aPinned = pinnedSet.has(a.id) ? 1 : 0;
      const bPinned = pinnedSet.has(b.id) ? 1 : 0;
      if (aPinned !== bPinned) return bPinned - aPinned;
      return 0;
    });
  }, [filtered, pinned]);

  const handleTogglePin = (groupId: string) => {
    if (!onTogglePin) return;
    const ok = onTogglePin(groupId);
    if (!ok) {
      setInfoMessage('You can pin up to 3 group chats.');
      window.setTimeout(() => setInfoMessage(''), 1800);
    }
    setOpenMenuFor(null);
  };

  return (
    <Container ref={containerRef}>
      {sortedChats.map((group) => (
        <GroupItem
          key={group.id}
          $active={group.id === selectedGroupId}
          onClick={() => onGroupSelect(group.id)}
        >
          <Avatar style={{ backgroundColor: group.avatarColor }}>{getInitials(group.name)}</Avatar>

          <GroupContent>
            <GroupName>{group.name}</GroupName>
            <MemberMeta>
              <MemberCount>
                {group.members}
                {' members'}
              </MemberCount>
              {muted[group.id] ? (
                <MutedIconWrap>
                  <NotificationsOff size={13} />
                </MutedIconWrap>
              ) : null}
              {!muted[group.id] && group.unread && !dismissed[group.id] ? (
                <UnreadBadge>{group.unread}</UnreadBadge>
              ) : null}
            </MemberMeta>
          </GroupContent>

          {pinned.includes(group.id) ? (
            <PinMarker>
              <PushPin size={14} />
            </PinMarker>
          ) : null}

          <ActionWrap onClick={(event) => event.stopPropagation()}>
            <MoreButton
              type="button"
              aria-label={`Open actions for ${group.name}`}
              onClick={() => setOpenMenuFor((current) => (current === group.id ? null : group.id))}
            >
              <MoreVert size={16} />
            </MoreButton>
            {openMenuFor === group.id ? (
              <Menu>
                <MenuItem type="button" onClick={() => handleTogglePin(group.id)}>
                  {pinned.includes(group.id) ? 'Unpin' : 'Pin'}
                </MenuItem>
                <MenuItem
                  type="button"
                  onClick={() => {
                    onToggleMute?.(group.id);
                    setOpenMenuFor(null);
                  }}
                >
                  {muted[group.id] ? 'Unmute' : 'Mute'}
                </MenuItem>
              </Menu>
            ) : null}
          </ActionWrap>
        </GroupItem>
      ))}
      {sortedChats.length === 0 ? <NoResults>No group chats found</NoResults> : null}
      {infoMessage ? <InfoMessage>{infoMessage}</InfoMessage> : null}
    </Container>
  );
};

export default GroupChatList;
