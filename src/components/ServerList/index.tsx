import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

import RocketSeat from '~/assets/svg/RocketSeat.svg';
import Pokemon from '~/assets/svg/Pokémon.svg';
import Code from '~/assets/svg/Code.svg';
import TypeScript from '~/assets/svg/TypeScript.svg';
import ReactJS from '~/assets/svg/ReactJS.svg';
import NodeJS from '~/assets/svg/NodeJS.svg';
import Mario from '~/assets/svg/Mario.svg';
import Pride from '~/assets/svg/Pride.svg';
import DC from '~/assets/svg/DC.svg';
import CSS from '~/assets/svg/CSS.svg';
import Ronne from '~/assets/svg/Ronne.svg';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome hasNotifications mentions={40} color="#cc78a3" logo={Ronne} name="Ronne Dev Server" />

      <Separator />

      <ServerButton hasNotifications mentions={11} color="#fff" logo={Pride} name="LGBTQI+ Pride" />
      <ServerButton hasNotifications mentions={40} color="#6633cc" logo={RocketSeat} name="RocketSeat" />
      <ServerButton hasNotifications mentions={7} color="#A598BE" logo={Code} name="Code" />
      <ServerButton mentions={32} color="#83cd29" logo={NodeJS} name="Node.js" />
      <ServerButton hasNotifications mentions={12} color="#2062af" logo={CSS} name="CSS" />
      <ServerButton mentions={42} color="#007bcd" logo={TypeScript} name="TypeScript" />
      <ServerButton mentions={52} color="#00d8ff" logo={ReactJS} name="ReactJS" />
      <ServerButton hasNotifications color="#0078f0" logo={DC} name="DC Comics" />
      <ServerButton mentions={12} color="#ed1b24" logo={Pokemon} name="Pokémon" />
      <ServerButton hasNotifications color="#db5454" logo={Mario} name="Super Mario" />
    </Container>
  );
};

export default ServerList;
