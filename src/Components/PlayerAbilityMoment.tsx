import React, { useEffect, useState, FC } from 'react';
import { AbilityUse, Player, testAbility } from '../../types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addAction, setActive } from '../reducers';

const PlayerAbilityMoment:FC<{ability: AbilityUse | null, time: number, player: Player, playerInd: number}> = (props) => {
  const { ability, time, player, playerInd } = props;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // alert(`Clicked on a cell for ${player.job} at ${time} seconds`);
    dispatch(addAction({
      abilityUse: {
        ability: testAbility,
        time,
        target: null
      },
      playerInd
    }));
    dispatch(setActive({
      time,
      job: player.job,
      playerInd
    }))
  }

  return (
    <div className='encounter-player-ability'>
      {ability === null && <button onClick={handleClick}>Set Ability</button>}
      {ability && <p>Test ability is here</p>}
    </div>
  )
}

export default PlayerAbilityMoment;