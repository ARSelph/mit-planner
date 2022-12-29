import React from 'react';
import EncounterWindow from './Components/EncounterWindow';
import EncounterSelector from './Components/EncounterSelector';
import ActionBar from './Components/ActionBar';
import { useAppSelector } from './hooks';

const App = () => {
  const actionBarState = useAppSelector(state => state.actionBar);
  console.log(actionBarState);
  
  return (
    <div>
      <h1>Mit Planner</h1>
      <EncounterSelector />
      <EncounterWindow />
      {actionBarState.active && <ActionBar /> }
    </div>
  )
};

export default App;