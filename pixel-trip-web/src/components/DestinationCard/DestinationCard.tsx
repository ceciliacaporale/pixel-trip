import React from 'react';
import { CardContainer, Title, Description } from './DestinationCard.styles';

type Destination = {
    id: number;
    name: string;
    description: string;
  };
  
  type Props = {
    destination: Destination;
  };
  
  export const DestinationCard = ({ destination }: Props) => {
    return (
      <CardContainer>
        <Title>{destination.name}</Title>
        <Description>{destination.description}</Description>
      </CardContainer>
    );
  };