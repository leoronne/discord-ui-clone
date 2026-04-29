import React from 'react';

import { Button, Container } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  color?: string;
  logo?: string;
  name?: string;
  onClick?: () => void;
}

const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotifications, mentions, color, logo, name, onClick }) => {
  return (
    <Container>
      <Button isHome={isHome} hasNotifications={hasNotifications} mentions={mentions} className={selected ? 'active' : ''} color={color} onClick={onClick}>
        <img src={logo} alt={name} />
        {name}
      </Button>
    </Container>
  );
};

export default ServerButton;
