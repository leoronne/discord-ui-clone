import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';

import avatar from '~/assets/img/avatar.jpg';

import { useStyles } from '../../styles/MaterialUI';
import { Container, Profile, Avatar, UserData, Icons, Icon, MicIcon, MicOffIcon, VolumeIcon, VolumeOffIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  const classes = useStyles();

  const [muteMic, setMuteMic] = useState(false);
  const [muteAudio, setMuteAudio] = useState(false);

  const handleMuteMic = () => setMuteMic(!muteMic);
  const handleMuteAudio = () => setMuteAudio(!muteAudio);

  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={avatar} alt="leoronne" className="user-avatar" />
        </Avatar>
        <UserData>
          <strong>leoronne</strong>
          <span>#9480</span>
        </UserData>
      </Profile>

      <Icons>
        <Tooltip title={`${muteMic ? 'Unmute' : 'Mute'} Microphone`} placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <Icon onClick={handleMuteMic}>{muteMic ? <MicOffIcon /> : <MicIcon />}</Icon>
        </Tooltip>
        <Tooltip title={`${muteAudio ? 'Unmute' : 'Mute'} Audio`} placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <Icon onClick={handleMuteAudio}>{muteAudio ? <VolumeOffIcon /> : <VolumeIcon />}</Icon>
        </Tooltip>
        <Icon>
          <Tooltip title="User Settings" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
            <SettingsIcon />
          </Tooltip>
        </Icon>
      </Icons>
    </Container>
  );
};

export default UserInfo;
