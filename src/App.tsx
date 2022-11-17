import React from 'react';
import EncounterWindow from './Components/EncounterWindow';
import EncounterSelector from './Components/EncounterSelector';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Mit Planner</h1>
        <EncounterSelector />
        <EncounterWindow />
      </div>
    </QueryClientProvider>

  )
};

export default App;