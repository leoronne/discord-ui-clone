import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

interface Props {
  channelName: string;
}
const ChannelInfo: React.FC<Props> = ({ channelName }) => {
  return (
    <Container>
      <HashtagIcon />

      <Title>{`#${channelName}`}</Title>

      <Separator />

      <Description>Open channel for chat</Description>
    </Container>
  );
};

export default ChannelInfo;
