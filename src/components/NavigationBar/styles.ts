import styled from 'styled-components';

export const NavigationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  background-color: var(--primary);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
`;

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex: 0 0 auto;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

/* ── Center Nav Buttons ── */
export const NavButton = styled.button<{ $active?: boolean }>`
  position: relative;
  padding: 5px 16px;
  border-radius: 20px;
  background-color: ${({ $active }) =>
    $active ? 'var(--quinary)' : 'transparent'};
  color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--gray)')};
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? '600' : '500')};
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ $active }) =>
      $active ? 'var(--quinary)' : 'rgba(255,255,255,0.06)'};
    color: var(--white);
  }
`;

/* ── Notification Button ── */
export const NotificationButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background-color: transparent;
  color: var(--gray);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    color: var(--white);
  }
`;

export const NotificationIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 14px;
  height: 14px;
  padding: 0 3px;
  border-radius: 7px;
  background-color: var(--notification);
  color: var(--white);
  font-size: 9px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  pointer-events: none;
`;

/* ── Notification Popup ── */
export const NotificationPopup = styled.div`
  position: absolute;
  top: 52px;
  left: 8px;
  width: 640px;
  max-height: 800px;
  background-color: var(--secondary);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  z-index: 1000;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NotificationPopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const NotificationPopupTitle = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--white);
`;

export const NotificationPopupContent = styled.div`
  padding: 8px 0;
  max-height: 320px;
  overflow-y: auto;
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
`;

export const NotificationItemIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 14px;
`;

export const NotificationItemText = styled.div`
  flex: 1;
`;

export const NotificationItemTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
`;

export const NotificationItemTime = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--gray);
`;

export const NotificationNewIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--notification);
  flex-shrink: 0;
`;

export const NotificationItemAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NotificationItemServerIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
`;

export const NotificationItemServerImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NotificationEmpty = styled.div`
  padding: 32px 16px;
  text-align: center;
  color: var(--gray);
  font-size: 13px;
`;

/* ── Profile Popup ── */
export const ProfilePopup = styled.div`
  position: absolute;
  top: 52px;
  right: 8px;
  width: 240px;
  background-color: var(--secondary);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProfilePopupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const ProfilePopupAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfilePopupUserInfo = styled.div``;

export const ProfilePopupUserName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
`;

export const ProfilePopupUserStatus = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--gray);
`;

export const ProfilePopupContent = styled.div`
  padding: 8px 0;
`;

export const ProfilePopupItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: transparent;
  border: none;
  color: var(--gray);
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  text-align: left;

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
    color: var(--white);
  }
`;

export const ProfilePopupDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.06);
  margin: 4px 12px;
`;

/* ── Profile Button ── */
export const ProfileButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const ProfileAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

export const ProfileStatusDot = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #3ba55c;
  border: 2px solid var(--primary);
`;

/* Legacy export kept for safety */
export const NavText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.5px;
`;
