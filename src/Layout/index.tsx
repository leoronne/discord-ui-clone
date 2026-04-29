import React, { useState } from 'react';
import { Grid, Main, Sidebar, ServerRailWrapper, RightSidebarWrapper, TopBar, Footer, MessageInputContainer, CollapseButtonLeft,
  CollapseButtonRight } from './styles';
import { ChannelData, ChannelInfo, UserInfo, RightSidebar, LeftSidebar, MessageInput, Navigation, ServerList, ServerDropdown } from '../components';
import PrivateMessagesPage from '../pages/PrivateMessages';
import GroupChatsPage from '../pages/GroupChats';
import UserProfilePopup from '../components/UserProfilePopup';
import AddServerModal from '../components/AddServerModal';
import { ServerData } from '../components/ServerList';
import { privateUsers, UserProfileData } from '../data/userProfiles';
import { mockUsers, MockUser } from '../data/mockUsers';
import { ChatMessage } from '../components/ChannelData';
import { Mention } from '../components/ChannelMessage';
import leoronne from '~/assets/img/avatar.jpg';
import user2 from '~/assets/img/user2.jpg';
import user4 from '~/assets/img/user4.jpg';
import user5 from '~/assets/img/user5.jpg';

import RocketSeat from '~/assets/svg/RocketSeat.svg';
import Code from '~/assets/svg/Code.svg';
import NodeJS from '~/assets/svg/NodeJS.svg';
import Pride from '~/assets/svg/Pride.svg';
import Ronne from '~/assets/svg/Ronne.svg';

// Chevron icon pointing left (for "collapse left sidebar")
const ChevronLeft = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

// Chevron icon pointing right (for "collapse right sidebar")
const ChevronRight = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

const fakeServer: ChatMessage[] = [
  { author: 'Leonardo Ronne', date: '06/21/2026', content: 'hi guys, how r u?', avatar: leoronne },
  {
    author: 'Luiky',
    date: '06/21/2026',
    content: (
      <>
        <Mention>@leoronne</Mention>
        heyyyy
      </>
    ),
    hasMention: true,
    avatar: user2,
  },
  { author: 'Prynce', date: '06/21/2026', content: 'fine, tnx n u?' },
  { author: 'Nyarth', date: '06/21/2026', content: 'heyy, whats up?' },
  { author: 'John Doe', date: '06/21/2026', content: 'hey, what r u up 2?' },
  { author: 'Maria Ciclano', date: '06/21/2026', content: 'whats gooooooood?!' },
  { author: 'H. Montanha', date: '06/21/2026', content: "good, just coding some rocketseat's challenges" },
  { author: 'Ronne12', date: '06/21/2026', content: 'good morning guys', avatar: user4 },
  {
    author: 'James',
    date: '06/21/2026',
    hasMention: true,
    content: (
      <>
        <Mention>@leoronne</Mention>
        heyy
      </>
    ),
  },
  { author: 'Enzo João', date: '06/21/2026', content: 'fine, tnx n u?' },
  { author: 'Valentina de Jesus', date: '06/21/2026', content: 'whats gooooooood?!' },
  { author: 'Enzo José', date: '06/21/2026', content: 'hey, what r u up 2?' },
  { author: 'Valentina Maria', date: '06/21/2026', content: 'heyy, whats up?' },
  {
    author: 'Brunno Enzo',
    date: '06/21/2026',
    hasMention: true,
    content: (
      <>
        <Mention>
          @leoronne
          {' '}
        </Mention>
        good, just coding some rocketseat&#39;s challenges
      </>
    ),
  },
  { author: 'Lara', date: '06/21/2026', content: 'fine, tnx n u?' },
  { author: 'Lohaine', date: '06/21/2026', content: 'heyy, whats up?' },
  { author: 'Lika', date: '06/21/2026', content: 'whats gooooooood?!' },
  { author: 'Rocket', date: '06/21/2026', content: <>There are currently 4 online users and 17 offline!</>, isBot: true, avatar: user5 },
];

const Layout: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('servers');
  const [selectedServer, setSelectedServer] = useState<string | null>('Ronne Dev Server');
  const [selectedChannel, setSelectedChannel] = useState<string>('open-chat');
  const [showServerDropdown, setShowServerDropdown] = useState<boolean>(false);
  const [showSeeAll, setShowSeeAll] = useState<boolean>(false);
  const [serverChatFeed, setServerChatFeed] = useState<ChatMessage[]>(fakeServer);
  const [servers, setServers] = useState<ServerData[]>([
    { name: 'Ronne Dev Server', logo: Ronne, color: '#cc78a3', hasNotifications: true, mentions: 40, isHome: true },
    { name: 'LGBTQIA+ Pride', logo: Pride, color: '#fff', hasNotifications: true, mentions: 11 },
    { name: 'RocketSeat', logo: RocketSeat, color: '#6633cc', hasNotifications: true, mentions: 40 },
    { name: 'Code', logo: Code, color: '#A598BE', hasNotifications: true, mentions: 7 },
    { name: 'Node.js', logo: NodeJS, color: '#83cd29', mentions: 32 },
  ]);

  const recentServers = servers.slice(0, 5);

  const [leftWidth, setLeftWidth] = useState<number>(240);
  const [rightWidth, setRightWidth] = useState<number>(240);
  const [selectedUser, setSelectedUser] = useState<UserProfileData | null>(null);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [dismissedUnreadByGroup, setDismissedUnreadByGroup] = useState<Record<string, boolean>>({});
  const [groupSearchTerm, setGroupSearchTerm] = useState('');
  const [pinnedGroupIds, setPinnedGroupIds] = useState<string[]>([]);
  const [mutedGroupIds, setMutedGroupIds] = useState<Record<string, boolean>>({});
  const [highlightedUser, setHighlightedUser] = useState<string | null>(null);
  const [popupUser, setPopupUser] = useState<MockUser | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 120, left: 120 });
  const [isAddServerModalOpen, setAddServerModalOpen] = useState(false);
  const leftCollapsed = leftWidth === 0;
  const rightCollapsed = rightWidth === 0;
  
  const handleServerClick = (serverName: string) => {
    if (serverName === 'See All') {
      setShowSeeAll(true);
      setShowServerDropdown(false);
    } else if (serverName === 'Add New') {
      setAddServerModalOpen(true);
      setShowServerDropdown(false);
    } else {
      setSelectedServer(serverName);
      setActiveNav('servers');
      setShowServerDropdown(false);
      setShowSeeAll(false);
    }
  };

  const handleNavChange = (id: string) => {
    if (id === 'servers') {
      setShowServerDropdown(!showServerDropdown);
    } else {
      setActiveNav(id);
      setShowServerDropdown(false);
      setShowSeeAll(false);
    }
  };

  const handleOpenPrivateMessage = (user: UserProfileData) => {
    setSelectedUser(user);
    setActiveNav('private');
    setShowServerDropdown(false);
    setShowSeeAll(false);
  };

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      author: 'golddragon',
      date: 'Today',
      content: message,
      avatar: privateUsers.find((u) => u.id === 'golddragon')?.avatar || '',
    };

    const mentionRegex = /@(\w+)/;
    const mentionMatch = message.match(mentionRegex);

    if (mentionMatch) {
      const mentionedUser = privateUsers.find((user) => user.username === mentionMatch[1]);
      if (mentionedUser) {
        newMessage.hasMention = true;
        newMessage.content = (
          <>
            <Mention>
              @
              {mentionedUser.username}
              {' '}
            </Mention>
            {message.replace(mentionRegex, '').trim()}
          </>
        );
      }
    }

    setServerChatFeed((prev) => [...prev, newMessage]);
  };

  /** Clears unread badge for the tapped group chat (persisted until refresh). */
  const handleGroupSelect = (groupId: string) => {
    setSelectedGroupId(groupId);
    setDismissedUnreadByGroup((prevState) => ({ ...prevState, [groupId]: true }));
  };

  const handleGroupBack = () => setSelectedGroupId(null);

  const handleTogglePinGroup = (groupId: string): boolean => {
    let wasAllowed = true;
    setPinnedGroupIds((current) => {
      if (current.includes(groupId)) {
        return current.filter((id) => id !== groupId);
      }
      if (current.length >= 3) {
        wasAllowed = false;
        return current;
      }
      return [...current, groupId];
    });
    return wasAllowed;
  };

  const handleToggleMuteGroup = (groupId: string) => {
    setMutedGroupIds((current) => ({ ...current, [groupId]: !current[groupId] }));
  };

  const handleServerAuthorClick = (
    authorName: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const matched = mockUsers.find((user) => user.name === authorName);
    const fallback: MockUser = {
      id: `unknown-${authorName.toLowerCase().replace(/\s+/g, '-')}`,
      name: authorName,
      nickname: authorName,
      pronouns: 'Unknown',
      description: 'No profile details yet.',
      mutualFriends: 0,
      mutualServers: 0,
      status: 'offline',
    };
    const targetUser = matched || fallback;
    const rect = event.currentTarget.getBoundingClientRect();
    const top = Math.min(Math.max(8, rect.top - 40), Math.max(8, window.innerHeight - 420 - 8));
    const left = Math.min(rect.right + 12, Math.max(8, window.innerWidth - 300 - 8));
    setPopupPosition({ top, left });
    setPopupUser(targetUser);
  };

  const renderMainContent = () => {
    // If see-all is open, show server list
    if (showSeeAll) {
      return (
        <ServerList
          onServerClick={(name) => {
            setSelectedServer(name);
            if (activeNav !== 'servers') {
              setActiveNav('servers');
            }
            setShowSeeAll(false);
          }}
          selectedServer={selectedServer}
          allServers={servers}
          onAddServerClick={() => setAddServerModalOpen(true)}
        />
      );
    }

    // Otherwise render based on activeNav
    switch (activeNav) {
      case 'private':
        return <PrivateMessagesPage onUserSelect={setSelectedUser} selectedUser={selectedUser} />;
      case 'groups':
        return (
          <GroupChatsPage
            selectedGroupId={selectedGroupId}
            searchTerm={groupSearchTerm}
            onSearchChange={setGroupSearchTerm}
            onBack={handleGroupBack}
            onHighlightUser={setHighlightedUser}
          />
        );
      case 'servers':
        if (selectedServer === 'Ronne Dev Server') {
          return (
            <>
              <ChannelInfo channelName={selectedChannel} />
              <ChannelData
                channelName={selectedChannel}
                messages={serverChatFeed}
                onAuthorClick={handleServerAuthorClick}
              />
            </>
          );
        }
        return (
          <div style={{ padding: '20px' }}>
            Channels for 
            {selectedServer}
          </div>
        );
      default:
        return (
          <>
            <ChannelInfo channelName={selectedChannel} />
            <ChannelData
              channelName={selectedChannel}
              messages={serverChatFeed}
              onAuthorClick={handleServerAuthorClick}
            />
          </>
        );
    }
  };

  return (
    <Grid $leftWidth={leftWidth} $rightWidth={rightWidth} $serverWidth={activeNav === 'servers' ? 72 : 0}>
      <TopBar>
        <Navigation activeNav={activeNav} onChange={handleNavChange} />
        {showServerDropdown && (
          <ServerDropdown onServerClick={handleServerClick} mostRecentServers={recentServers} />
        )}
      </TopBar>

      {/* Server rail (servers page only) */}
      <ServerRailWrapper $visible={activeNav === 'servers'}>
        <ServerList
          onServerClick={handleServerClick}
          selectedServer={selectedServer}
          allServers={servers}
          onAddServerClick={() => setAddServerModalOpen(true)}
        />
      </ServerRailWrapper>

      {/* Left sidebar */}
      <Sidebar $width={leftWidth}>
        <LeftSidebar 
          width={leftWidth}
          setWidth={setLeftWidth}
          activeNav={activeNav} 
          selectedChannel={selectedChannel} 
          onChannelSelect={setSelectedChannel} 
          selectedGroupId={selectedGroupId}
          onGroupSelect={handleGroupSelect}
          dismissedUnreadByGroup={dismissedUnreadByGroup}
          groupSearchTerm={groupSearchTerm}
          pinnedGroupIds={pinnedGroupIds}
          mutedGroupIds={mutedGroupIds}
          onTogglePin={handleTogglePinGroup}
          onToggleMute={handleToggleMuteGroup}
        />
      </Sidebar>

      {/* Collapse toggle: left sidebar */}
      <CollapseButtonLeft
        $collapsed={leftCollapsed}
        $leftWidth={leftWidth}
        $serverOffset={activeNav === 'servers' ? 72 : 0}
        onClick={() => setLeftWidth((w) => (w === 0 ? 240 : 0))}
        title={leftCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        aria-label={leftCollapsed ? 'Expand left sidebar' : 'Collapse left sidebar'}
      >
        <ChevronLeft />
      </CollapseButtonLeft>

      <Main $hideScroll={activeNav === 'servers'}>{renderMainContent()}</Main>

      {/* Collapse toggle: right sidebar */}
      <CollapseButtonRight
        $collapsed={rightCollapsed}
        $rightWidth={rightWidth}
        onClick={() => setRightWidth((w) => (w === 0 ? 240 : 0))}
        title={rightCollapsed ? 'Expand members list' : 'Collapse members list'}
        aria-label={rightCollapsed ? 'Expand right sidebar' : 'Collapse right sidebar'}
      >
        <ChevronRight />
      </CollapseButtonRight>

      {/* Right sidebar */}
      <RightSidebarWrapper $width={rightWidth}>
        <RightSidebar
          width={rightWidth}
          setWidth={setRightWidth}
          activeNav={activeNav}
          selectedUser={selectedUser}
          selectedGroupId={selectedGroupId}
          onOpenPrivateMessage={handleOpenPrivateMessage}
          highlightedUserName={highlightedUser}
        />
      </RightSidebarWrapper>

      <MessageInputContainer>
        <MessageInput onSendMessage={handleSendMessage} />
      </MessageInputContainer>

      <Footer $leftCollapsed={leftCollapsed}>
        <UserInfo />
      </Footer>
      {popupUser ? (
        <UserProfilePopup
          user={popupUser}
          position={popupPosition}
          onClose={() => setPopupUser(null)}
          onMessageUser={() => setPopupUser(null)}
        />
      ) : null}
      {isAddServerModalOpen ? (
        <AddServerModal
          onClose={() => setAddServerModalOpen(false)}
          onCreate={(server) => {
            setServers((current) => [...current, server]);
            setSelectedServer(server.name);
          }}
        />
      ) : null}
    </Grid>
  );
};

export default Layout;
