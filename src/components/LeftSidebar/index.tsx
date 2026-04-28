import React, { useCallback, useEffect, useRef } from 'react';
import { LeftSidebarStyled, ResizeHandle } from './styles';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';

export interface Props {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  selectedChannel?: string;
  onChannelSelect?: (channelName: string) => void;
}

const MIN_WIDTH = 150;
const MAX_WIDTH = 400;
const DEFAULT_WIDTH = 240;

const LeftSidebar: React.FC<Props> = ({ width, setWidth, selectedChannel, onChannelSelect }) => {
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

      let nextWidth = moveEvent.clientX - sidebarBounds.left;

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
    <LeftSidebarStyled ref={sidebarRef} $width={width}>
      <ServerName />
      <ChannelList selectedChannel={selectedChannel} onChannelSelect={onChannelSelect} />
      <ResizeHandle onMouseDown={handleResizeStart} role="separator" aria-label="Resize left sidebar" />
    </LeftSidebarStyled>
  );
};

export default LeftSidebar;
