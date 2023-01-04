import React, { useEffect, useState, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { deletePlayer, setActive, setInactive } from '../reducers';
import { useGetEncounterByNameQuery, useGetAllJobsQuery } from '../rtkapi';
import { EncounterData } from '../../types';
import BossAbilityMoment from './BossAbilityMoment';
import PlayerAbilityMoment from './PlayerAbilityMoment';
import MitTotal from './MitTotal';


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
  const actionBar = useAppSelector(state => state.actionBar);
  const dispatch = useAppDispatch();
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

  const handlePlayerDelete = (i: number): void => {
    if (actionBar.active) {
      const { time, job, playerInd } = actionBar;
      if (actionBar.playerInd === i) {
        dispatch(setInactive());
      } else if (time && job && playerInd && playerInd > i) {
        dispatch(setActive(
          {
            time,
            job,
            playerInd: playerInd - 1
          }));
      }
    }
    dispatch(deletePlayer(i));
  }

  data.abilities.forEach(ability => {
    bossAbilityMoments.push(<td><BossAbilityMoment ability={ability}/></td>)
  });

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    // const uses = player.abilityUses;
    const playerRow: JSX.Element[] = [];
    playerRow.push(
      <td>
        {player.job.fullName}
        <button onClick={() => handlePlayerDelete(i)}>X</button>
      </td>
    );
    for (const ability of data.abilities) {
      const activeCell = actionBar.playerInd === i && actionBar.time === ability.time
      // if (activeCell) console.log(`active cell on ${player.job.name} at ${ability.time}`);
      playerRow.push(<td className={activeCell ? 'active-action' : 'action'}><PlayerAbilityMoment player={player} playerInd={i} time={ability.time} abilities={player.abilityUses[ability.time] || null}/></td>)
    }
    playerAbilityMoments.push(<tr>{playerRow}</tr>);
  }

  const totals: JSX.Element[] = [];
  for (const ability of data.abilities) {
    totals.push(<MitTotal time={ability.time}/>);
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
          <tr>
            <td>Total Mitigation</td>
            {totals}
          </tr>
        </tbody>
      </table>
      {/* <p>Displaying data for {data.bossName}</p> */}
    </div>
  )
}

export default EncounterDisplay;