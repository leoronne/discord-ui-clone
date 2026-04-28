import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100%;
  padding: 32px;
  background-color: var(--primary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const PageText = styled.p`
 min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
`;

const GroupChatsPage: React.FC = () => (
  <PageContainer>
    <PageText>
      This page is under construction.
    </PageText>
  </PageContainer>
);

export default GroupChatsPage;
