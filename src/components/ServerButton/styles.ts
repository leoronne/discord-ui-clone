import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div<Props>`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 10px;

  @media (max-width: 598px) {
    width: 35px;
    height: 35px;
  }
`;

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 15px;
  background-color: ${(props) => (props.color ? props.color : 'var(--primary)')};
  /* ${(props) => (props.isHome ? 'var(--rocketseat)' : 'var(--primary)')}; */
  position: relative;
  cursor: pointer;
  > img {
    width: 30px;
    height: 30px;
  }
  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
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
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) => (props.mentions && props.mentions > 0 ? 'inline' : 'none')};
  }
  transition: border-radius 0.2s, background-color 0.2s;
  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) => (props.color ? props.color : 'var(--discord)')};
  }
  &:hover ~ .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 598px) {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    &::before {
      width: 5px;
      height: 5px;
      left: -13px;
    }
    > img {
      width: 25px;
      height: 25px;
    }
    &::after {
      height: 10px;
      font-size: 7px;
    }
  }
`;

export const Tooltip = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;

  .tooltiptext {
    /* visibility: hidden; */
    text-align: center !important;
    font-size: 16px;
    padding: 5px;
    width: 120px;
    background-color: var(--ifm-scrollbar-hover);
    color: var(--white);
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    /* opacity: 0; */
    transition: opacity 0.3s;
    display: initial;
  }

  .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--ifm-scrollbar-hover) transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 598px) {
    width: 15px;
  }
`;
