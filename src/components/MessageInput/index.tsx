import React, { useState } from 'react';
import { InputWrapper, Input, InputIcon, SendButton, SendIcon } from './styles';

interface Props {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<Props> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <InputWrapper>
      <Input
        placeholder="Message #chat"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <InputIcon />
      <SendButton onClick={handleSend} disabled={!input.trim()} title="Send message">
        <SendIcon />
      </SendButton>
    </InputWrapper>
  );
};

export default MessageInput;