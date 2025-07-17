import React from 'react';
import { Hero } from './components/ui/animated-hero';
import { Feature } from './components/ui/feature-section-with-grid';

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <Feature />
    </div>
  );
}

export default App; 