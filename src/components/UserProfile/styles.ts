import styled from 'styled-components';

const getCardBoxShadow = (
  mode?: 'sidebar' | 'popup',
  compact?: boolean
) => {
  if (mode === 'sidebar') return 'none';
  if (compact) return '0 6px 18px rgba(0, 0, 0, 0.35)';
  return 'none';
};

export const Card = styled.div<{ $compact?: boolean; $mode?: 'sidebar' | 'popup' }>`
  width: 100%;
  height: ${({ $mode }) => ($mode === 'sidebar' ? '100%' : 'auto')};
  margin: 0;
  background: var(--secondary);
  border: ${({ $mode }) => ($mode === 'sidebar' ? 'none !important' : '1px solid var(--border-color)')};
  border-radius: ${({ $mode }) => ($mode === 'sidebar' ? '0' : '8px')};
  padding: ${({ $mode, $compact }) => ($mode === 'sidebar' && '0') || ($compact ? '12px' : '16px')};
  color: var(--white);
  box-shadow: ${({ $compact, $mode }) => ($mode === 'sidebar' ? 'none !important' : getCardBoxShadow($mode, $compact))};
`;

export const SidebarContent = styled.div<{ $mode?: 'sidebar' | 'popup' }>`
  padding-left: ${({ $mode }) => ($mode === 'sidebar' ? '16px' : '0')};
  padding-top: ${({ $mode }) => ($mode === 'sidebar' ? '16px' : '0')};
`;

export const EmptyState = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: rgba(255, 255, 255, 0.3);
  background: var(--secondary);
  border: none;
  border-radius: 0;
  font-size: 13px;
  text-align: center;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 40;
`;

export const PopupCard = styled(Card)`
  width: 320px;
  max-width: calc(100vw - 32px);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  background: transparent;
  color: var(--gray);
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  width: 24px;
  height: 24px;

  &:hover {
    color: var(--white);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--primary);
`;

export const Identity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Username = styled.strong<{ $mode?: 'sidebar' | 'popup' }>`
  color: ${({ $mode }) => ($mode === 'sidebar' ? '#ffffff' : 'inherit')};
  font-size: 16px;
  line-height: 1.2;
`;

export const Status = styled.span<{ $status: 'online' | 'offline' | 'idle' | 'dnd'; $mode?: 'sidebar' | 'popup' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ $mode }) => ($mode === 'sidebar' ? '#ffffff' : 'var(--gray)')};
  text-transform: capitalize;
  font-size: 13px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $status }) => {
      if ($status === 'online') return '#3ba55d';
      if ($status === 'idle') return '#faa61a';
      if ($status === 'dnd') return '#ed4245';
      return '#747f8d';
    }};
  }
`;

export const Bio = styled.p<{ $mode?: 'sidebar' | 'popup' }>`
  margin-top: 12px;
  color: ${({ $mode }) => ($mode === 'sidebar' ? '#ffffff' : 'var(--gray)')};
  font-size: 13px;
  line-height: 1.4;
`;
