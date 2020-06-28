import React from 'react';
import ReactTooltip from 'react-tooltip';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div className={`channel-config${selected ? ' channel-active' : ''}`}>
        <InviteIcon data-tip="Create Invite" />
        <SettingsIcon data-tip="Channel Settings" />
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" id="settings"/>
    </Container>
  );
};

export default ChannelButton;
