import React, { useEffect, useState, FC } from 'react';
import { AbilityUse } from '../../types';

const PlayerAbilityMoment:FC<{ability: AbilityUse | null, time: number}> = (props) => {
  const { ability } = props;

  return (
    <div className='encounter-player-ability'>

    </div>
  )
}

export default PlayerAbilityMoment;