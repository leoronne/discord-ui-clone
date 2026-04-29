import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
  @media (max-width: 868px) {
    display: none;
  }
`;

export const SectionLabel = styled.div`
  margin-top: 24px;
  margin-bottom: 10px;
  padding-top: 4px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--gray);
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0 8px;
  background-color: var(--quinary);
  opacity: 0.9;
  flex-shrink: 0;
`;

export const RowActions = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.15s ease;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 50%;
  cursor: default;
  background-color: var(--quaternary);
  color: var(--gray);
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: var(--tertiary);
    color: var(--white);
  }

  svg {
    flex-shrink: 0;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 6px 10px 4px;
  margin: 0 -4px;
  cursor: pointer;
  border-radius: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: transparent;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);

    ${RowActions} {
      opacity: 1;
    }
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  overflow: hidden;

  &.bot {
    background-color: var(--mention-detail);
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }
`;

export const UserMiddle = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DisplayName = styled.strong`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;
  color: var(--white);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StatusLine = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 16px;
`;

export const StatusDot = styled.span<{ $variant: 'online' | 'offline' | 'idle' }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $variant }) => {
    if ($variant === 'online') return '#3ba55d';
    if ($variant === 'idle') return '#faa61a';
    return '#747f8d';
  }};
`;

export const StatusText = styled.span`
  font-size: 12px;
  line-height: 1.2;
  color: var(--gray);
  font-weight: 500;
`;

export const BotTag = styled.span`
  margin-top: 2px;
  align-self: flex-start;
  background-color: var(--discord);
  color: var(--white);
  border-radius: 4px;
  padding: 2px 6px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.04em;
`;
