import React from 'react';
import { InputWrapper, Input, InputIcon } from './styles';

const MessageInput: React.FC = () => {
  return (
    <InputWrapper>
      <Input placeholder="Message #chat" />
      <InputIcon />
    </InputWrapper>
  );
};

export default MessageInput;