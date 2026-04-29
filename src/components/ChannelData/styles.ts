import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
  overflow-y: hidden;
`;

export const Messages = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 48px - 68px - 61px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const EmptyChannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;

export const EmptyChannelIcon = styled.div`
  font-size: 48px;
  color: var(--gray);
  margin-bottom: 16px;
`;

export const EmptyChannelText = styled.p`
  font-size: 16px;
  color: var(--gray);
  text-align: center;
`;
