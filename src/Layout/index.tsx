import React, {useState } from 'react';
import { Grid, Main, Sidebar, RightSidebarWrapper, TopBar, Footer, MessageInputContainer, CollapseButtonLeft,
  CollapseButtonRight } from './styles';
import { ChannelData, ChannelInfo, UserInfo, RightSidebar, LeftSidebar, MessageInput, Navigation, ServerList, ServerDropdown } from '../components';
import PrivateMessagesPage from '../pages/PrivateMessages';
import GroupChatsPage from '../pages/GroupChats';
import { ServerData } from '../components/ServerList';
import { UserProfileData } from '../data/userProfiles';

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

const Layout: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('servers');
  const [selectedServer, setSelectedServer] = useState<string | null>('Ronne Dev Server');
  const [selectedChannel, setSelectedChannel] = useState<string>('open-chat');
  const [showServerDropdown, setShowServerDropdown] = useState<boolean>(false);
  const [showSeeAll, setShowSeeAll] = useState<boolean>(false);

  const servers: ServerData[] = [
    { name: 'Ronne Dev Server', logo: Ronne, color: '#cc78a3', hasNotifications: true, mentions: 40, isHome: true },
    { name: 'LGBTQIA+ Pride', logo: Pride, color: '#fff', hasNotifications: true, mentions: 11 },
    { name: 'RocketSeat', logo: RocketSeat, color: '#6633cc', hasNotifications: true, mentions: 40 },
    { name: 'Code', logo: Code, color: '#A598BE', hasNotifications: true, mentions: 7 },
    { name: 'Node.js', logo: NodeJS, color: '#83cd29', mentions: 32 },
  ];

  const recentServers = servers.slice(0, 5); // Show 3 most recent

  const [leftWidth, setLeftWidth] = useState<number>(240);
  const [rightWidth, setRightWidth] = useState<number>(240);
  const [selectedUser, setSelectedUser] = useState<UserProfileData | null>(null);
  const leftCollapsed = leftWidth === 0;
  const rightCollapsed = rightWidth === 0;
  
  const handleServerClick = (serverName: string) => {
    if (serverName === 'See All') {
      setShowSeeAll(true);
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
          mostRecentServers={recentServers.map((s) => s.name) || ''}
        />
      );
    }

    // Otherwise render based on activeNav
    switch (activeNav) {
      case 'private':
        return <PrivateMessagesPage onUserSelect={setSelectedUser} selectedUser={selectedUser} />;
      case 'groups':
        return <GroupChatsPage />;
      case 'servers':
        if (selectedServer === 'Ronne Dev Server') {
          return (
            <>
              <ChannelInfo channelName={selectedChannel} />
              <ChannelData channelName={selectedChannel} />
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
            <ChannelData channelName={selectedChannel} />
          </>
        );
    }
  };

  return (
    <Grid $leftWidth={leftWidth} $rightWidth={rightWidth}>
      <TopBar>
        <Navigation activeNav={activeNav} onChange={handleNavChange} />
        {showServerDropdown && (
          <ServerDropdown onServerClick={handleServerClick} mostRecentServers={recentServers} />
        )}
      </TopBar>

      {/* Left sidebar */}
      <Sidebar $width={leftWidth}>
        <LeftSidebar 
          width={leftWidth}
          setWidth={setLeftWidth}
          selectedChannel={selectedChannel} 
          onChannelSelect={setSelectedChannel} 
        />
      </Sidebar>

      {/* Collapse toggle: left sidebar */}
      <CollapseButtonLeft
        $collapsed={leftCollapsed}
        $leftWidth={leftWidth}
        onClick={() => setLeftWidth((w) => (w === 0 ? 240 : 0))}
        title={leftCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        aria-label={leftCollapsed ? 'Expand left sidebar' : 'Collapse left sidebar'}
      >
        <ChevronLeft />
      </CollapseButtonLeft>

      <Main>{renderMainContent()}</Main>

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
          setSelectedUser={setSelectedUser}
        />
      </RightSidebarWrapper>

      <MessageInputContainer>
        <MessageInput />
      </MessageInputContainer>

      <Footer $leftCollapsed={leftCollapsed}>
        <UserInfo />
      </Footer>
    </Grid>
  );
};

export default Layout;
