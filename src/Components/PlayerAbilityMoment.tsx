import React, { useEffect, useState, FC } from 'react';
import { AbilityUse, Player, testAbility } from '../../types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addAction, setActive, deleteAction } from '../reducers';

const PlayerAbilityMoment:FC<{abilities: AbilityUse[] | null, time: number, player: Player, playerInd: number}> = (props) => {
  const { abilities, time, player, playerInd } = props;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // alert(`Clicked on a cell for ${player.job} at ${time} seconds`);
    dispatch(setActive({
      time,
      job: player.job,
      playerInd
    }))
  }
  
  const handleDelete = (i: number, name: string) => {
    dispatch(deleteAction({
      time,
      playerInd,
      abilityInd: i,
      name
    }))
  }

  const abilityNames: JSX.Element[] = [];
  if (abilities) {
    abilities.forEach((ability, i) => {
      abilityNames.push(
        <div className='action-use'>
          <img src={`public/abilityIcons/${ability.ability.iconPath}`}/>
          <p>{ability.ability.name}</p>
          <button onClick={() => handleDelete(i, ability.ability.name)}>X</button>
        </div>);
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