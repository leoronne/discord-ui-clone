import styled from 'styled-components';

export const Grid = styled.div<{ $leftWidth: number; $rightWidth: number; $serverWidth: number }>`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 46px 1fr 52px;
  grid-template-columns: ${({ $serverWidth, $leftWidth, $rightWidth }) =>
    `${$serverWidth}px ${$leftWidth}px 1fr ${$rightWidth}px`};
  gap: 0;
  background-color: var(--primary);
  transition: grid-template-columns 0.25s ease;
  overflow: visible;
`;

export const TopBar = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  align-items: center;
  background-color: var(--primary);
  z-index: 100;
  overflow: visible;
  position: relative;
`;

export const Sidebar = styled.div<{ $width: number }>`
  grid-column: 2;
  grid-row: 2;
  overflow: hidden;
  background-color: var(--secondary);
  width: ${({ $width }) => `${$width}px`};
  min-width: 0;
  transition: width 0.25s ease;
  overflow-y: ${({ $width }) => ($width === 0 ? 'hidden' : 'auto')};
`;

export const RightSidebarWrapper = styled.div<{ $width: number }>`
  grid-column: 4;
  grid-row: 2 / 4;
  overflow: hidden;
  background-color: var(--secondary);
  width: ${({ $width }) => `${$width}px`};
  min-width: 0;
  transition: width 0.25s ease;
  overflow-y: ${({ $width }) => ($width === 0 ? 'hidden' : 'auto')};

  @media (max-width: 867px) {
    display: none;
  }
`;

export const Main = styled.div<{ $hideScroll?: boolean }>`
  grid-column: 3;
  grid-row: 2;
  min-width: 0;
  overflow-y: ${({ $hideScroll }) => ($hideScroll ? 'hidden' : 'auto')};
`;

export const MessageInputContainer = styled.div`
  grid-column: 3;
  grid-row: 3;
  background-color: var(--secondary);
  border-top: 1px solid var(--border-color);
  justify-content: left;
`;

export const Footer = styled.div<{ $leftCollapsed: boolean }>`
  grid-column: 2;
  grid-row: 3;
  background-color: var(--quaternary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  min-width: 0;
  transition: width 0.25s ease;
`;

export const CollapseButtonLeft = styled.button<{ $collapsed: boolean; $leftWidth: number; $serverOffset: number }>`
  position: fixed;
  left: ${({ $collapsed, $leftWidth, $serverOffset }) =>
    $collapsed ? `${$serverOffset}px` : `${$serverOffset + $leftWidth}px`};
  top: 15%;
  transform: translateY(-50%);
  width: 20px;
  height: 48px;
  border-radius: 0 6px 6px 0;
  background-color: var(--quaternary);
  color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: left 0.25s ease, color 0.15s ease, background-color 0.15s ease;
  z-index: 60;

  &:hover {
    background-color: var(--quinary);
    color: var(--white);
  }

  svg {
    transition: transform 0.25s ease;
    transform: ${({ $collapsed }) => ($collapsed ? 'rotate(0deg)' : 'rotate(180deg)')};
  }
`;

export const ServerRailWrapper = styled.div<{ $visible: boolean }>`
  grid-column: 1;
  grid-row: 2 / 4;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  overflow: visible;
  background-color: var(--tertiary);
  position: relative;
  z-index: 120;
`;

export const CollapseButtonRight = styled.button<{ $collapsed: boolean; $rightWidth: number }>`
  position: fixed;
  right: ${({ $collapsed, $rightWidth }) => ($collapsed ? '0px' : `${$rightWidth}px`)};
  top: 15%;
  transform: translateY(-50%);
  width: 20px;
  height: 48px;
  border-radius: 6px 0 0 6px;
  background-color: var(--quaternary);
  color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: right 0.25s ease, color 0.15s ease, background-color 0.15s ease;
  z-index: 60;

  &:hover {
    background-color: var(--quinary);
    color: var(--white);
  }

  svg {
    transition: transform 0.25s ease;
    transform: ${({ $collapsed }) => ($collapsed ? 'rotate(0deg)' : 'rotate(180deg)')};
  }

  @media (max-width: 867px) {
    display: none;
  }
`;
