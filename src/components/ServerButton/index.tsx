import React from 'react';
import ReactTooltip from 'react-tooltip';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  color?: string;
  logo?: any;
  name?: string;
}

const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotifications, mentions, color, logo, name }) => {
  return (
    <>
      <Button isHome={isHome} hasNotifications={hasNotifications} mentions={mentions} className={selected ? 'active' : ''} color={color} data-tip={name}>
        {/* {isHome &&  */}
        <img src={logo} alt={name} />
        {/* } */}
      </Button>
      <ReactTooltip place="right" type="dark" effect="solid"/>
    </>
  );
};

export default ServerButton;
