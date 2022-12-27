import React, { useEffect, useState, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetEncounterByNameQuery, useGetAllJobsQuery } from '../rtkapi';
import { EncounterData } from '../../types';
import BossAbilityMoment from './BossAbilityMoment';
import PlayerAbilityMoment from './PlayerAbilityMoment';


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
  const players = useAppSelector(state => state.player.players);
  const jobs = useGetAllJobsQuery().data;

  const bossAbilityMoments: JSX.Element[] = [];
  const playerAbilityMoments: JSX.Element[] = [];
  // data.abilities.forEach(ability => {
  //   abilityDisplays.push(
  //     <div className='encounter-boss-ability'>
  //       <p>Ability: {ability.name}</p>
  //       <p>Type: {ability.type}</p>
  //       <p>Description: {ability.description}</p>
  //     </div>
  //   )
  // })

  data.abilities.forEach(ability => {
    bossAbilityMoments.push(<td><BossAbilityMoment ability={ability}/></td>)
  });

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const uses = player.abilityUses;
    const playerRow: JSX.Element[] = [];
    if (jobs) {
      playerRow.push(<td>{jobs[player.job].fullName}</td>);
    }
    let p = 0;
    for (const ability of data.abilities) {
      playerRow.push(<td><PlayerAbilityMoment player={player} playerInd={i} time={ability.time} ability={player.abilityUses[ability.time] || null}/></td>)
    }
    playerAbilityMoments.push(<tr>{playerRow}</tr>);
  }

  return (
    <div className='encounter-boss-timeline'>
      <table>
        <tbody>
          <tr>
            <td><h3>{data.bossName}</h3></td>
            {bossAbilityMoments}
          </tr>
          {playerAbilityMoments}
        </tbody>
      </table>
      {/* <p>Displaying data for {data.bossName}</p> */}
    </div>
  )
}

export default EncounterDisplay;