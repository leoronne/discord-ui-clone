import React from 'react';

import { Container, Title, AddNewButton } from './styles';

interface LeftBarTitleProps {
  name: string;
  hasAddNew?: boolean;
  onAddNewClick?: () => void;
}

const LeftBarTitle: React.FC<LeftBarTitleProps> = ({ name, hasAddNew, onAddNewClick }) => {
  return (
    <Container>
      <Title>{name}</Title>
      {hasAddNew ? <AddNewButton onClick={onAddNewClick}>+ Add New</AddNewButton> : null}
    </Container>
  );
};

export default LeftBarTitle;