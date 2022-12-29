import React, { useEffect, useState, FC } from 'react';
import { Ability } from '../../types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addAction, setActive } from '../reducers';

const ActionBar: FC = () => {
  console.log('loaded action bar');
  const { time, job, playerInd } = useAppSelector(state => state.actionBar);

  const dispatch = useAppDispatch();
  if (!time || !job || playerInd === null) return <></>;
  console.log(job.abilities);

  const handleClick = (ability: Ability) => {
    dispatch(addAction({
      abilityUse: {
        ability,
        time,
        target: null
      },
      playerInd
    }));
  }
  const actionOptions: JSX.Element[] = [];
  for (const ability of Object.values(job.abilities)) {
    actionOptions.push(
      <div className='action-bar-item'>
        <img src={`public/abilityIcons/${ability.iconPath}`}/>
        <h4>{ability.name}</h4>
        <p>Recast: {ability.recast}</p>
        <p>{ability.description}</p>
        <button onClick={() => handleClick(ability)}>Add</button>
      </div>
    )
  }

  return(
    <div className='action-bar'>{actionOptions}</div>
  )
}

export default ActionBar;