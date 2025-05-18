import React, { useState } from 'react';
import { DiscoverButton } from '../../components/DiscoverButton/DiscoverButton';
import { DestinationCard } from '../../components/DestinationCard/DestinationCard';

import {
  MainCardContainer,
  Title,
  Subtitle,
  Footer,
} from './MainCard.styles';

import { destinations } from '../../data/destinations';

type Destination = {
  id: number;
  name: string;
  description: string;
};

export const MainCard = () => {
  const [destination, setDestination] = useState<Destination | null>(null);

  const handleDiscover = () => {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    setDestination(destinations[randomIndex]);
  };

  return (
    <><MainCardContainer>
          <Title>Pixel Trip</Title>
          <Subtitle>Sua próxima viagem em 8-bits</Subtitle>
          <DiscoverButton onClick={handleDiscover} />
          {destination && <DestinationCard destination={destination} />}
      </MainCardContainer>
      <Footer>PIXEL-TRIP © {new Date().getFullYear()} • Press START to continue</Footer>
      </>
  );
};