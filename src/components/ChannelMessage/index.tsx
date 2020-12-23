import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';

export { Mention } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  avatar?: string;
}

const ChannelMessage: React.FC<Props> = ({ author, date, content, hasMention, isBot, avatar }) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''}>{avatar ? <img src={avatar} alt={author} className="user-avatar" /> : ''}</Avatar>

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
