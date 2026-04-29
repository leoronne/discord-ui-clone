import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
`;

export const PopupCard = styled.div`
  position: fixed;
  width: 300px;
  border-radius: 8px;
  background: var(--secondary);
  color: var(--white);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 101;
`;

export const Banner = styled.div<{ $color: string }>`
  height: 82px;
  background: ${({ $color }) => $color};
`;

export const Body = styled.div`
  padding: 0 16px 16px;
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  margin-top: -36px;
`;

export const Avatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 6px solid var(--secondary);
  background: var(--quinary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatusDot = styled.span<{ $status: 'online' | 'offline' }>`
  position: absolute;
  right: 3px;
  bottom: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid var(--secondary);
  background: ${({ $status }) => ($status === 'online' ? 'var(--discord)' : 'var(--gray)')};
`;

export const UserInfo = styled.div`
  margin-top: 10px;
`;

export const Name = styled.h3`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
`;

export const Meta = styled.p`
  margin-top: 4px;
  color: var(--gray);
  font-size: 13px;
`;

export const Section = styled.div`
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid var(--quinary);
`;

export const SectionTitle = styled.h4`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--gray);
  margin-bottom: 8px;
`;

export const MutualItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
  font-size: 14px;

  & + & {
    margin-top: 8px;
  }
`;

export const AboutText = styled.p`
  color: var(--white);
  font-size: 14px;
  line-height: 1.4;
`;

export const MessageButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  background: var(--discord);
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.05);
  }
`;
