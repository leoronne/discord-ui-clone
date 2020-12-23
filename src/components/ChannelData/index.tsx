import React, { useRef, useEffect } from 'react';

import leoronne from '~/assets/img/avatar.jpg';
import cyhi from '~/assets/img/cyhi.jpg';
import user2 from '~/assets/img/user2.jpg';
import user4 from '~/assets/img/user4.jpg';
import user5 from '~/assets/img/user5.jpg';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const users = ['Prynce', 'Nyarth', 'John Doe', 'Maria Ciclano', 'H. Montanha', 'James', 'Enzo João', 'Valentina de Jesus', 'Enzo José', 'Valentina Maria', 'Brunno Enzo', 'Lara', 'Lohaine', 'Lika'];
  const messages = ['fine, tnx n u?', 'heyy, whats up?', 'hey, what r u up 2?', 'whats gooooooood?!', "good, just coding some rocketseat's challenges"];

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <ChannelMessage author="Cyhi" date="21/06/2020" content={<>Welcome to the Open Chat channel!</>} hasMention isBot avatar={cyhi} />

      <Messages ref={messagesRef}>
        <ChannelMessage author="Leonardo Ronne" date="21/06/2020" content="hi guys, how r u?" avatar={leoronne} />
        <ChannelMessage
          author="Luiky"
          date="21/06/2020"
          content={(
            <>
              <Mention>@leoronne</Mention>
              {' '}
              heyyyy
            </>
          )}
          hasMention
          avatar={user2}
        />
        {Array.from(Array(5).keys()).map((n) => (
          <ChannelMessage key={n} author={users[Math.floor(Math.random() * users.length)]} date="21/06/2020" content={messages[Math.floor(Math.random() * messages.length)]} />
        ))}
        <ChannelMessage author="Ronne12" date="21/06/2020" content="good morning guys" avatar={user4} />
        <ChannelMessage
          author={users[Math.floor(Math.random() * users.length)]}
          date="21/06/2020"
          hasMention
          content={(
            <>
              <Mention>@leoronne</Mention> 
              {' '}
              {messages[Math.floor(Math.random() * messages.length)]}
            </>
          )}
        />
        {Array.from(Array(5).keys()).map((n) => (
          <ChannelMessage key={n} author={users[Math.floor(Math.random() * users.length)]} date="21/06/2020" content={messages[Math.floor(Math.random() * messages.length)]} />
        ))}
        <ChannelMessage
          author={users[Math.floor(Math.random() * users.length)]}
          date="21/06/2020"
          hasMention
          content={(
            <>
              <Mention>@leoronne</Mention> 
              {' '}
              {messages[Math.floor(Math.random() * messages.length)]}
            </>
          )}
        />
        <ChannelMessage author="Rocket" date="21/06/2020" content={<>There are currently 4 online users and 17 offline!</>} isBot avatar={user5} />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
