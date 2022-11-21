import React from 'react';
import EncounterWindow from './Components/EncounterWindow';
import EncounterSelector from './Components/EncounterSelector';

const App = () => {
  return (
    <div>
      <h1>Mit Planner</h1>
      <EncounterSelector />
      <EncounterWindow />
    </div>
  )
};

export default App;