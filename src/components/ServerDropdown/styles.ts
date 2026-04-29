import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: calc(50% - 130px);
  transform: translateX(-50%);
  background-color: var(--secondary);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  overflow: visible;
`;

export const ServerDropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(5 * 56px);
  overflow-y: auto;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  color: var(--white);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--quinary);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Ensures buttons are spaced evenly */
  gap: 8px; /* Adds spacing between the buttons */
  padding: 8px; /* Optional: Adds padding around the buttons */
`;

export const AddNewButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--quinary);
  }
`;

export const SeeAllButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0 0 8px 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--quinary);
  }
`;
