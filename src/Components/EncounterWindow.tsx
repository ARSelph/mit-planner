import React, { useEffect, useState, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetEncounterByNameQuery } from '../rtkapi';
import EncounterDisplay from './EncounterDisplay';


const EncounterWindow: FC = () => {
  const encounter = useAppSelector(state => state.encounter.encounterName || '')
  const [skip, setSkip] = useState(true);
  const { data, error, isLoading, isUninitialized } = useGetEncounterByNameQuery(encounter, { skip });

  useEffect(() => {
    setSkip(encounter ? false : true);
  }, [encounter])

  return (
    <div>
      Encounter Window
      { isUninitialized && <p>No encounter selected</p>}
      { !!error && <p>There was an error loading data</p> }
      { isLoading && <p>Loading encounter data...</p> }
      { !!data && <EncounterDisplay data={data}/> }
    </div>
  )
}

export default EncounterWindow;