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
`;

export const NoResults = styled.div`
  margin-top: 10px;
  color: var(--gray);
  font-size: 13px;
  padding: 8px 6px;
`;

export const InfoMessage = styled.div`
  margin-top: 8px;
  color: var(--gray);
  font-size: 12px;
  padding: 6px;
`;

export const GroupItem = styled.div<{ $active?: boolean }>`
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background: ${({ $active }) => ($active ? 'var(--quinary)' : 'transparent')};
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const PinMarker = styled.span`
  margin-left: auto;
  margin-right: 8px;
  color: var(--gray);
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ActionWrap = styled.div`
  position: relative;
  margin-left: auto;
`;

export const MoreButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: var(--gray);
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s ease, background-color 0.15s ease, color 0.15s ease;

  ${GroupItem}:hover & {
    opacity: 1;
  }

  &:hover {
    color: var(--white);
    background-color: var(--quinary);
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 26px;
  right: 0;
  min-width: 110px;
  background: var(--secondary);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  z-index: 20;
  padding: 6px;
`;

export const MenuItem = styled.button`
  width: 100%;
  text-align: left;
  color: var(--white);
  font-size: 13px;
  border-radius: 6px;
  padding: 7px 8px;
  background: transparent;

  &:hover {
    background: var(--quinary);
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
`;

export const GroupContent = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  margin-left: 13px;
`;

export const MemberMeta = styled.div`
  margin-top: 2px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const GroupName = styled.strong`
  color: var(--white);
  opacity: 0.9;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MemberCount = styled.span`
  color: var(--gray);
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const UnreadBadge = styled.span`
  min-width: 20px;
  height: 16px;
  padding: 0 6px;
  border-radius: 4px;
  background-color: var(--notification);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const MutedIconWrap = styled.span`
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gray);
`;
