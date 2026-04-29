import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 520px;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--secondary);
  color: var(--white);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  color: var(--gray);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 0 12px;
  background: var(--chat-input);
  color: var(--white);
  font-size: 14px;
`;

export const Muted = styled.div`
  color: var(--gray);
  font-size: 13px;
`;

export const Section = styled.div`
  margin-bottom: 12px;
`;

export const SearchWrap = styled.div`
  position: relative;
`;

export const SearchDropdown = styled.div`
  margin-top: 8px;
  max-height: 180px;
  overflow-y: auto;
  border-radius: 8px;
  background: var(--tertiary);
  padding: 6px;
`;

export const ResultRow = styled.button`
  width: 100%;
  background: transparent;
  color: var(--white);
  border-radius: 6px;
  padding: 8px;
  display: flex;
  align-items: center;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--quinary);
  }
`;

export const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--discord);
  color: var(--white);
  font-size: 11px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const ResultMeta = styled.div`
  margin-left: 8px;
  min-width: 0;
`;

export const Name = styled.div`
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
`;

export const Pronouns = styled.div`
  color: var(--gray);
  font-size: 12px;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--quinary);
  color: var(--white);
  border-radius: 16px;
  padding: 5px 10px;
  font-size: 12px;
`;

export const ChipRemove = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: transparent;
  color: var(--white);
  cursor: pointer;
`;

export const Footer = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
`;

export const Buttons = styled.div`
  display: inline-flex;
  gap: 8px;
`;

export const CancelButton = styled.button`
  height: 36px;
  padding: 0 14px;
  border-radius: 6px;
  background: var(--tertiary);
  color: var(--white);
  cursor: pointer;

  &:hover {
    background: var(--quinary);
  }
`;

export const CreateButton = styled.button`
  height: 36px;
  padding: 0 16px;
  border-radius: 6px;
  background: var(--discord);
  color: var(--white);
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  background-color: var(--tertiary);
  color: var(--white);
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  line-height: 1;

  &:hover {
    background-color: var(--quinary);
  }
`;
