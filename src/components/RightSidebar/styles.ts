import styled, { css } from 'styled-components';

export const RightSidebarStyled = styled.div<{ $width: number; $hasSelectedUser?: boolean; $isEmptyState?: boolean }>`
  grid-column: 3;
  grid-row: 2;
  width: ${({ $width }) => `${$width}px`};
  background: var(--secondary);
  padding: ${({ $hasSelectedUser }) => ($hasSelectedUser ? '0' : 'initial')};
  overflow-y: auto;
  border-left: 1px solid var(--border-color);
  position: relative;
  ${({ $isEmptyState }) =>
    $isEmptyState &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    `}

  /* Hide on tablet and below */
  @media (max-width: 867px) {
    display: none;
  }

  /* Stack on mobile */
  @media (max-width: 597px) {
    grid-column: 1 / -1;
    width: 100%;
    border-left: none;
    border-bottom: 1px solid #e0e0e0;
    display: block;
  }
`;

export const ResizeHandle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  cursor: col-resize;
  background-color: transparent;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(88, 101, 242, 0.2);
  }
`;