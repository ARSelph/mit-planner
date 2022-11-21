import React, { useEffect, useState, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetEncounterByNameQuery } from '../rtkapi';
import { EncounterData } from '../../types';

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

const EncounterDisplay: FC<{data: EncounterData}> = props => {
  const { data } = props;

  const abilityDisplays: JSX.Element[] = [];
  data.abilities.forEach(ability => {
    abilityDisplays.push(
      <div className='encounter-boss-ability'>
        <p>Ability: {ability.name}</p>
        <p>Type: {ability.type}</p>
        <p>Description: {ability.description}</p>
      </div>
    )
  })

  return (
    <div className='encounter-boss-timeline'>
      {/* <p>Displaying data for {data.bossName}</p> */}
      <>{abilityDisplays}</>
    </div>
  )
}

export default EncounterDisplay;