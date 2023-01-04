import React, { useEffect, useState, FC } from 'react';
import { BossAbility} from '../../types';

const BossAbilityMoment:FC<{ability: BossAbility}> = (props) => {
  const { ability } = props;
  const mins = Math.floor(ability.time / 60);
  const secs = ability.time % 60;

  return (
    <div className='encounter-boss-ability'>
      <p>{mins}:{secs}</p>
      <p>Ability: {ability.name}</p>
      <p>Type: {ability.type}</p>
      <p>Description: {ability.description}</p>
    </div>
  )
}

export default BossAbilityMoment;