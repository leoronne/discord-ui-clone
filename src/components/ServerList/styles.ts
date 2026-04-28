import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--primary);
  padding: 11px 18px;
  max-height: 100vh;
  overflow-y: scroll;
  width: 100%;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ServerButtonWrapper = styled.div`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 8px;
  background-color: var(--secondary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const FavoritesButton = styled.button`
  padding: 8px 12px;
  background-color: var(--tertiary);
  color: var(--white);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    background-color: var(--quinary);
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--quaternary);
  margin: 8px 0;
  border-radius: 1px;
`;