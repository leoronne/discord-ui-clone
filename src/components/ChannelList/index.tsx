import React from 'react';
import { Tooltip } from '@material-ui/core';

import ChannelButton from '../ChannelButton';

import { useStyles } from '../../styles/MaterialUI';
import { Container, Category, AddCategoryIcon } from './styles';

export interface Props {
  selectedChannel?: string;
  onChannelSelect?: (channelName: string) => void;
}

const ChannelList: React.FC<Props> = ({ selectedChannel = 'open-chat', onChannelSelect }) => {
  const classes = useStyles();
  
  const channels = ['open-chat', 'dev', 'series', 'finance', 'interviews'];
  
  const handleChannelClick = (channelName: string) => {
    if (onChannelSelect) {
      onChannelSelect(channelName);
    }
  };
  
  return (
    <Container>
      <Category>
        <span>Text channels</span>
        <Tooltip
          title="Add Channel"
          placement="bottom"
          arrow
          classes={{ tooltip: classes.tooltip, arrow: classes.arrow, popper: classes.popper }}
        >
          <AddCategoryIcon />
        </Tooltip>
      </Category>

      {channels.map((channel) => (
        <ChannelButton 
          key={channel} 
          channelName={channel} 
          selected={channel === selectedChannel}
          onClick={() => handleChannelClick(channel)}
        />
      ))}
    </Container>
  );
};

export default ChannelList;
