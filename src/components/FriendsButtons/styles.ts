import styled from 'styled-components';

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px 10px 5px;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: var(--secondary);
`;

export const FriendsButton = styled.button<{ active?: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 6px;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;

  background-color: transparent;
  color: var(--white);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: var(--white);
  }
`;