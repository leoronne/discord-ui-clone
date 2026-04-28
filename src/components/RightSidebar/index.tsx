import React, { useCallback, useEffect, useRef } from 'react';
import { RightSidebarStyled, ResizeHandle } from './styles';
import UserList from '../UserList';
import UserProfile from '../UserProfile';
import { UserProfileData } from '../../data/userProfiles';

interface Props {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  activeNav: string;
  selectedUser: UserProfileData | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserProfileData | null>>;
}

const MIN_WIDTH = 150;
const MAX_WIDTH = 400;
const DEFAULT_WIDTH = 240;

const RightSidebar: React.FC<Props> = ({ width, setWidth, activeNav, selectedUser }) => {
  const cleanupRef = useRef<(() => void) | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const previousWidthRef = useRef<number>(DEFAULT_WIDTH);
  const widthRef = useRef<number>(width);

  useEffect(() => {
    widthRef.current = width;
  }, [width]);

  const stopResize = useCallback(() => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
  }, []);

  useEffect(() => () => stopResize(), [stopResize]);

  const handleResizeStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    let collapsedDuringDrag = false;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const sidebarBounds = sidebarRef.current?.getBoundingClientRect();
      if (!sidebarBounds) return;

      const rightOffset = window.innerWidth - sidebarBounds.right;
      let nextWidth = window.innerWidth - moveEvent.clientX - rightOffset;

      if (nextWidth < MIN_WIDTH) {
        if (widthRef.current >= MIN_WIDTH) {
          previousWidthRef.current = Math.min(MAX_WIDTH, widthRef.current);
        }
        collapsedDuringDrag = true;
        setWidth(0);
        return;
      }

      if ((widthRef.current === 0 || collapsedDuringDrag) && nextWidth >= MIN_WIDTH) {
        nextWidth = previousWidthRef.current || DEFAULT_WIDTH;
        collapsedDuringDrag = false;
      }

      const clampedWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, nextWidth));
      previousWidthRef.current = clampedWidth;
      setWidth(clampedWidth);
    };

    const onMouseUp = () => {
      stopResize();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    cleanupRef.current = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  };

  return (
    <RightSidebarStyled
      ref={sidebarRef}
      $width={width}
      $hasSelectedUser={activeNav === 'private' && Boolean(selectedUser)}
      $isEmptyState={activeNav === 'private' && !selectedUser}
    >
      <ResizeHandle onMouseDown={handleResizeStart} role="separator" aria-label="Resize right sidebar" />
      {activeNav === 'private' ? <UserProfile user={selectedUser} mode="sidebar" /> : <UserList />}
    </RightSidebarStyled>
  );
};

export default RightSidebar;