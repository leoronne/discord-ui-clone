// src/components/ChannelData/index.tsx
import React, { useRef, useEffect } from 'react';
import cyhi from '~/assets/img/cyhi.jpg';
import ChannelMessage from '../ChannelMessage';
import { Container, Messages, EmptyChannel, EmptyChannelIcon, EmptyChannelText } from './styles';

export interface ChatMessage {
  author: React.ReactNode;
  date: string;
  content: React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  avatar?: string;
}

export interface Props {
  channelName: string;
  messages: ChatMessage[];
  onAuthorClick?: (author: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ChannelData: React.FC<Props> = ({ channelName, messages, onAuthorClick }) => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messages]);

  if (channelName !== 'open-chat') {
    return (
      <Container>
        <EmptyChannel>
          <EmptyChannelIcon>
            {`#${channelName}`}
          </EmptyChannelIcon>
          <EmptyChannelText>
            {`Welcome to #${channelName}, be the first to start a conversation!`}
          </EmptyChannelText>
        </EmptyChannel>
      </Container>
    );
  }

  const combinedMessages: ChatMessage[] = [
    {
      author: 'Cyhi',
      date: '06/21/2026',
      content: <>Welcome to the Open Chat channel!</>,
      hasMention: true,
      isBot: true,
      avatar: cyhi,
    },
    ...messages,
  ];

  return (
    <Container>
      <Messages ref={messagesRef}>
        {combinedMessages.map((message) => {
          const stringAuthor = typeof message.author === 'string' ? message.author : null;
          const contentKey = typeof message.content === 'string' ? message.content : 'rich-content';
          const renderedAuthor = onAuthorClick && stringAuthor ? (
            <button
              type="button"
              className="author-link"
              onClick={(event) => onAuthorClick(stringAuthor, event)}
            >
              {stringAuthor}
            </button>
          ) : (
            message.author
          );

          return (
            <ChannelMessage
              key={`${message.date}-${stringAuthor || 'unknown'}-${contentKey}`}
              author={renderedAuthor}
              date={message.date}
              content={message.content}
              hasMention={message.hasMention}
              isBot={message.isBot}
              avatar={message.avatar}
            />
          );
        })}
      </Messages>
    </Container>
  );
};

export default ChannelData;