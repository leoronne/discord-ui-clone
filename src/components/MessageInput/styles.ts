import styled from 'styled-components';
import { AlternateEmail, Send } from 'styled-icons/material';

export const InputWrapper = styled.div`
  width: 100%;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 45px;
  border-radius: 7px;
  border: none;
  color: var(--white);
  background-color: var(--chat-input);
  font-size: 14px;
  
  &::placeholder {
    color: var(--gray);
  }

  &:focus {
    outline: none;
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  position: absolute;
  left: 32px;
  pointer-events: none;
`;

export const SendButton = styled.button`
  position: absolute;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--gray);
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  &:disabled {
    color: var(--gray);
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const SendIcon = styled(Send)`
  width: 20px;
  height: 20px;
`;