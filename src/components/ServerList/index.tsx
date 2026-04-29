import React from 'react';
import { Add } from 'styled-icons/material';

import DiscordLogo from '~/assets/img/discord_logo_clone.jpeg';

import {
  Container,
  HomeButton,
  Separator,
  ServerButton,
  ActivePill,
  MentionsBadge,
  NotificationsDot,
  PlusButton,
  ServerIcon,
  ServerInitials,
} from './styles';

export interface ServerData {
  name: string;
  logo?: string;
  color: string;
  mentions?: number;
  hasNotifications?: boolean;
  isHome?: boolean;
  memberNames?: string[];
}

interface Props {
  onServerClick: (serverName: string) => void;
  selectedServer?: string | null;
  allServers: ServerData[];
  onAddServerClick?: () => void;
}

const ServerList: React.FC<Props> = ({
  onServerClick,
  selectedServer,
  allServers,
  onAddServerClick,
}) => {
  return (
    <Container>
      <HomeButton
        data-tooltip="Home"
        aria-label="Home"
        onClick={() => onServerClick('Ronne Dev Server')}
        $active={selectedServer === 'Ronne Dev Server'}
      >
        {selectedServer === 'Ronne Dev Server' ? <ActivePill /> : null}
        <ServerIcon src={DiscordLogo} alt="Home" />
      </HomeButton>
      <Separator />
      {allServers.map((server) => (
        <ServerButton
          key={server.name}
          data-tooltip={server.name}
          aria-label={server.name}
          onClick={() => onServerClick(server.name)}
          $active={selectedServer === server.name}
          $color={server.color}
        >
          {selectedServer === server.name ? <ActivePill /> : null}
          {server.logo ? (
            <ServerIcon src={server.logo} alt={server.name} />
          ) : (
            <ServerInitials $color={server.color}>
              {server.name[0]?.toUpperCase() || '?'}
            </ServerInitials>
          )}
          {server.hasNotifications ? <NotificationsDot /> : null}
          {server.mentions ? <MentionsBadge>{server.mentions}</MentionsBadge> : null}
        </ServerButton>
      ))}
      <PlusButton
        type="button"
        data-tooltip="Add a Server"
        aria-label="Add a Server"
        onClick={onAddServerClick}
      >
        <Add size={22} />
      </PlusButton>
    </Container>
  );
};

export default ServerList;
