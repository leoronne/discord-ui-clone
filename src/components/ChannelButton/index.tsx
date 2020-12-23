import React from 'react';
import { Tooltip } from '@material-ui/core';

import { useStyles } from '../../styles/MaterialUI';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  const classes = useStyles();
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div className={`channel-config${selected ? ' channel-active' : ''}`}>
        <Tooltip title="Create Invite" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <InviteIcon />
        </Tooltip>
        <Tooltip title="Channel Settings" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <SettingsIcon />
        </Tooltip>
      </div>
    </Container>
  );
};

export default ChannelButton;
