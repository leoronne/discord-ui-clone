import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);
  padding: 10px 0;
  height: 100%;
  overflow-y: auto;
  width: 72px;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const tooltipCss = `
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    bottom: calc(100% + 6px);
    transform: translateX(-50%);
    padding: 6px 10px;
    border-radius: 6px;
    color: var(--white);
    background: #18191C;
    white-space: nowrap;
    font-size: 12px;
    font-family: 'DM Sans', var(--font-family);
    font-weight: 700;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease;
    z-index: 1000;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: calc(100% + 1px);
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #18191C;
    opacity: 0;
    transition: opacity 0.15s ease;
    z-index: 1000;
    pointer-events: none;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const ActivePill = styled.span`
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 22px;
  border-radius: 4px;
  background: var(--white);
`;

export const ServerIcon = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ServerInitials = styled.div<{ $color: string }>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $color }) => $color};
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const HomeButton = styled.button<{ $active?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-bottom: 8px;
  background: ${({ $active }) => ($active ? 'var(--discord)' : 'var(--secondary)')};
  cursor: pointer;
  ${tooltipCss}
`;

export const ServerButton = styled.button<{ $active?: boolean; $color: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-bottom: 8px;
  background: ${({ $active, $color }) => ($active ? $color : 'var(--secondary)')};
  cursor: pointer;
  transition: border-radius 0.15s ease, background-color 0.15s ease;
  ${tooltipCss}

  &:hover {
    border-radius: 16px;
  }
`;

export const NotificationsDot = styled.span`
  position: absolute;
  left: -2px;
  top: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--white);
`;

export const MentionsBadge = styled.span`
  position: absolute;
  right: -6px;
  bottom: -4px;
  min-width: 20px;
  height: 16px;
  border-radius: 8px;
  background: var(--notification);
  border: 3px solid var(--tertiary);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

export const PlusButton = styled.button`
  margin-top: auto;
  margin-bottom: 8px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--gray);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-radius 0.15s ease, color 0.15s ease, background-color 0.15s ease;
  ${tooltipCss}

  &:hover {
    border-radius: 16px;
    color: var(--white);
    background: var(--discord);
  }
`;

export const Separator = styled.div`
  width: 32px;
  height: 2px;
  background-color: var(--secondary);
  margin: 6px 0 10px;
  border-radius: 1px;
`;

// Compatibility wrapper used by ServerDropdown list items.
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