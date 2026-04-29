import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
  overflow: visible;
  font-family: 'DM Sans', var(--font-family);

  @media (max-width: 598px) {
    display: none;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
    font-family: 'DM Sans', var(--font-family);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;
`;
