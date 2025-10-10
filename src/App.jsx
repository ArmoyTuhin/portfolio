import React, { useState } from 'react';
import './App.css';
import './components/LoadingScreen.css';
import SinglePagePortfolio from './pages/SinglePagePortfolio';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <>
      {!loadingComplete && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className="min-h-screen bg-background text-foreground scanlines">
        <SinglePagePortfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;

