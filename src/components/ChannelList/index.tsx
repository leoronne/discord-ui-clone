import React from 'react';
import { Tooltip } from '@material-ui/core';

import ChannelButton from '../ChannelButton';

import { useStyles } from '../../styles/MaterialUI';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Category>
        <span>Text channels</span>
        <Tooltip title="Add Channel" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <AddCategoryIcon />
        </Tooltip>
      </Category>

      <ChannelButton channelName="open-chat" selected />
      <ChannelButton channelName="dev" />
      <ChannelButton channelName="series" />
      <ChannelButton channelName="finance" />
      <ChannelButton channelName="interviews" />
    </Container>
  );
};

export default ChannelList;
