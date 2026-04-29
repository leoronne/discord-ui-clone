import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 250;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 520px;
  border-radius: 10px;
  padding: 16px;
  background: var(--secondary);
  color: var(--white);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--tertiary);
  color: var(--white);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: var(--quinary);
  }
`;

export const Section = styled.div`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  color: var(--gray);
  font-size: 12px;
  text-transform: uppercase;
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

export const IconPickerWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconPreview = styled.div<{ $color: string }>`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $color }) => $color};
  color: var(--white);
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UploadButton = styled.label`
  height: 34px;
  padding: 0 12px;
  border-radius: 6px;
  background: var(--tertiary);
  color: var(--white);
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: var(--quinary);
  }

  input {
    display: none;
  }
`;

export const SearchWrap = styled.div`
  margin-top: 8px;
  max-height: 170px;
  overflow-y: auto;
  border-radius: 8px;
  background: var(--tertiary);
  padding: 6px;
`;

export const ResultRow = styled.button`
  width: 100%;
  border-radius: 6px;
  background: transparent;
  color: var(--white);
  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: var(--quinary);
  }
`;

export const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--discord);
  color: var(--white);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Name = styled.div`
  margin-left: 8px;
  font-size: 14px;
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
  gap: 8px;
`;

export const CancelButton = styled.button`
  height: 36px;
  padding: 0 14px;
  border-radius: 6px;
  background: var(--tertiary);
  color: var(--white);
  cursor: pointer;
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

export const Muted = styled.div`
  color: var(--gray);
  font-size: 13px;
`;
