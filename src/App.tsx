import React from 'react';
import EncounterWindow from './Components/EncounterWindow';
import EncounterSelector from './Components/EncounterSelector';
import { useAppSelector } from './hooks';

const App = () => {
  const actionBarState = useAppSelector(state => state.actionBar);
  console.log(actionBarState);
  
  return (
    <div>
      <h1>Mit Planner</h1>
      <EncounterSelector />
      <EncounterWindow />
      {actionBarState.active && <p>Action Bar is Active</p> }
    </div>
  )
};

export default App;