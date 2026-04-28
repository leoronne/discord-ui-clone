import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

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