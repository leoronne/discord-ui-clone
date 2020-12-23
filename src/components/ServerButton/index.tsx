import React from 'react';
import { Tooltip } from '@material-ui/core';

import { useStyles } from '../../styles/MaterialUI';
import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  color?: string;
  logo?: string;
  name?: string;
}

const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotifications, mentions, color, logo, name }) => {
  const classes = useStyles();
  return (
    <>
      <Tooltip title={String(name)} placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
        <Button isHome={isHome} hasNotifications={hasNotifications} mentions={mentions} className={selected ? 'active' : ''} color={color}>
          <img src={logo} alt={name} />
        </Button>
      </Tooltip>
    </>
  );
};

export default ServerButton;
