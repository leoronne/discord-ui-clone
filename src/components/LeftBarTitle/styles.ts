import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 11px 0 16px;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

  @media (max-width: 598px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const AddNewButton = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  color: var(--white);
  background-color: var(--tertiary);
  border: 1px solid var(--white);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 85%;

  &:hover {
    background-color: var(--tertiary-hover);
  }
`;
