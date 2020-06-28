import styled from 'styled-components';
import { Mic, MicOff, Settings } from 'styled-icons/material';
import { VolumeFull, VolumeMute } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);

  .user-avatar {
    width: 32px;
    border-radius: 50%;
  }
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  > strong {
    color: var(--white);
    font-size: 13px;
    display: block;
  }
  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: -5px;
  > div:not(:first-child) {
    margin-left: 7px;
  }
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const MicOffIcon = styled(MicOff)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const VolumeIcon = styled(VolumeFull)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const VolumeOffIcon = styled(VolumeMute)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;
