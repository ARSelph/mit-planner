import React, { useEffect, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useQuery } from 'react-query';

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
  const encounter = useAppSelector(state => state.encounter.encounterName)
  const { isLoading, error, data } = useQuery({
    queryKey: ['encounterData', encounter],
    queryFn: () =>
      fetch(`/api/loadencounter?encounter=${encounter}`).then(res => 
        res.json()
      ),
    enabled: !!encounter
  })

  return (
    <div>
      Encounter Window
      <p>{encounter ? encounter : 'no encounter selected'}</p>
      {!!isLoading && <span>Loading encounter...</span>}
      {!!error && <span>Failed to load data</span>}
      {!!data && <div>Data goes here for {data.bossName}</div>}
    </div>
  )
}

export default EncounterWindow;