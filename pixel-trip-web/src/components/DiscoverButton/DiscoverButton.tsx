import React from 'react';
import { StyledButton } from './DiscoverButton.styles';

type DiscoverButtonProps = {
  onClick: () => void;
};

export const DiscoverButton = ({ onClick }: DiscoverButtonProps) => {
  return <StyledButton onClick={onClick}>Descobrir destino!</StyledButton>;
};
