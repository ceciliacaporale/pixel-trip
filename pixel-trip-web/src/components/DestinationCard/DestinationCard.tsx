import React from 'react';
import { CardContainer, Title, Description, Climate } from './DestinationCard.styles';

type Destination = {
    id: number;
    name: string;
    description: string;
    climate?: string;
  };
  
  type Props = {
    destination: Destination;
  };
  
  export const DestinationCard = ({ destination }: Props) => {
    return (
      <CardContainer>
        <Title>{destination.name}</Title>
        <Description>{destination.description}</Description>
        <Climate>{destination.climate}</Climate>
      </CardContainer>
    );
  };