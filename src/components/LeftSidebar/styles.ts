import styled from 'styled-components';

export const LeftSidebarStyled = styled.div<{ $width: number }>`
  grid-column: 1;
  grid-row: 2;
  width: ${({ $width }) => `${$width}px`};
  background: #fafafa;
  overflow-y: auto;
  overflow-x: visible;
  position: relative;
  border-right: 1px solid #e0e0e0;
  position: relative;
  z-index: 5;
  font-family: 'DM Sans', var(--font-family);

  /* Stack on mobile */
  @media (max-width: 597px) {
    grid-column: 1 / -1;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }

  /* Hide on small tablets */
  @media (max-width: 867px) {
    width: 200px;
  }
`;

export const ResizeHandle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  cursor: col-resize;
  background-color: transparent;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(88, 101, 242, 0.2);
  }
`;