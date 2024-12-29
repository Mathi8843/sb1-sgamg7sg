import React from 'react';
import Background from './components/Background';
import Bubbles from './components/Decorative/Bubbles';
import LeftPanel from './components/Layout/LeftPanel';
import RightPanel from './components/Layout/RightPanel';

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Bubbles />
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;