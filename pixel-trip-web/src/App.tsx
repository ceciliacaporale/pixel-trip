import { useState } from 'react';
import { DestinationCard } from './components/DestinationCard/DestinationCard';
import { DiscoverButton } from './components/DiscoverButton/DiscoverButton';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const [showDestination, setShowDestination] = useState(false);
  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Pixel Trip</h1>
        <p>Your 8-bit travel adventure generator</p>
     
     </header>

      <main>
      <DiscoverButton onClick={() => setShowDestination(true)} />
      {showDestination && <DestinationCard />}
      </main>

 <footer>PIXEL-TRIP © {new Date().getFullYear()} • Press START to continue</footer>
    </>
  );
}

export default App;