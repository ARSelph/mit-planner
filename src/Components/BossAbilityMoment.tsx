import React, { useEffect, useState, FC } from 'react';
import { BossAbility} from '../../types';

const BossAbilityMoment:FC<{ability: BossAbility}> = (props) => {
  const { ability } = props;

  return (
    <div className='encounter-boss-ability'>
      <p>Ability: {ability.name}</p>
      <p>Type: {ability.type}</p>
      <p>Description: {ability.description}</p>
    </div>
  )
}

export default BossAbilityMoment;