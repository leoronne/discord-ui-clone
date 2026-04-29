import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div<Props>`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 598px) {
    width: 100%;
  }
`;

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  padding: 4px 8px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  gap: 12px;
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  > img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 8px;
    background-color: ${(props) => (props.color ? props.color : 'var(--primary)')};
    padding: 4px;
    box-sizing: border-box;
  }

  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: 2px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    left: 30px;
    top: 24px;
    border-radius: 12px;
    border: 4px solid var(--secondary);
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    color: var(--white);
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) => (props.mentions && props.mentions > 0 ? 'inline' : 'none')};
  }

  @media (max-width: 598px) {
    font-size: 12px;
    padding: 3px 6px;
    gap: 8px;
    > img {
      width: 24px;
      height: 24px;
    }
  }
`;

