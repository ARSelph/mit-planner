import React, { useEffect, useState, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetEncounterByNameQuery } from '../rtkapi';


/* 
Encounter window governs the boss, fight timeline, and abilities
used by the boss and by the players.
This is where players will input their mitigation abilities used
in response to boss actions.

Information needed from encounter:
{
  encounterName: string,
  bossName: string,
  duration: number (length of encounter in seconds),
  variations: number (possible rng changing encounter),
  abilities: [
    {
      name: string,
      type: raidwide | tankbuster | other,
      description: string,
      time: number,
      appearsInVariation: number[],
    }
  ] 
}
*/


const EncounterWindow: FC = () => {
  const encounter = useAppSelector(state => state.encounter.encounterName || '')
  const [skip, setSkip] = useState(true);
  const { data, error, isLoading, isUninitialized } = useGetEncounterByNameQuery(encounter, { skip });

  useEffect(() => {
    setSkip(encounter.length ? false : true);
  }, [encounter])

  return (
    <div>
      Encounter Window
      { isUninitialized && <p>No encounter selected</p>}
      { !!error && <p>There was an error loading data</p> }
      { isLoading && <p>Loading encounter data...</p> }
      { !!data && <p>Showing data for {data.bossName}</p> }
    </div>
  )
}

export default EncounterWindow;