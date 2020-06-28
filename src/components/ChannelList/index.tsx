import React from 'react';
import ReactTooltip from 'react-tooltip';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text channels</span>
        <AddCategoryIcon data-tip="Add Channel" />
        <ReactTooltip place="top" type="dark" effect="solid" id="add" />
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
