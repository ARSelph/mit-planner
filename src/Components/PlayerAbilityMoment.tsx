import React, { useEffect, useState, FC } from 'react';
import { AbilityUse, Player, testAbility } from '../../types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addAction, setActive } from '../reducers';

const PlayerAbilityMoment:FC<{abilities: AbilityUse[] | null, time: number, player: Player, playerInd: number}> = (props) => {
  const { abilities, time, player, playerInd } = props;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // alert(`Clicked on a cell for ${player.job} at ${time} seconds`);
    // dispatch(addAction({
    //   abilityUse: {
    //     ability: testAbility,
    //     time,
    //     target: null
    //   },
    //   playerInd
    // }));
    dispatch(setActive({
      time,
      job: player.job,
      playerInd
    }))
  }
  const abilityNames: JSX.Element[] = [];
  if (abilities) {
    abilities.forEach(ability => {
      abilityNames.push(<p>{ability.ability.name}</p>);
    })
  }

  return (
    <div className='encounter-player-ability'>
      {abilities && abilityNames}
      <button onClick={handleClick}>Set Ability</button>
    </div>
  )
}

export default PlayerAbilityMoment;