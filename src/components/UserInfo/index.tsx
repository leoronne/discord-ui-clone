import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import avatar from '~/assets/img/avatar.jpg';

import { Container, Profile, Avatar, UserData, Icons, Icon, MicIcon, MicOffIcon, VolumeIcon, VolumeOffIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
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
        <Icon data-tip={`${muteMic ? 'Unmute' : 'Mute'} Microphone`} onClick={handleMuteMic}>
          {muteMic ? <MicOffIcon /> : <MicIcon />}
        </Icon>
        <Icon data-tip={`${muteAudio ? 'Unmute' : 'Mute'} Audio`} onClick={handleMuteAudio}>
          {muteAudio ? <VolumeOffIcon /> : <VolumeIcon />}
        </Icon>
        <Icon>
          <SettingsIcon data-tip="User Settings" />
        </Icon>
      </Icons>
      <ReactTooltip place="top" type="dark" effect="float" id="icons" />
    </Container>
  );
};

export default UserInfo;
