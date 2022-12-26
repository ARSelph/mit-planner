import React, { useEffect, useState, FC } from 'react';
import { AbilityUse, Player } from '../../types';

const PlayerAbilityMoment:FC<{ability: AbilityUse | null, time: number, player: Player}> = (props) => {
  const { ability, time, player } = props;

  const handleClick = () => {
    alert(`Clicked on a cell for ${player.job} at ${time} seconds`);
  }

  return (
    <div className='encounter-player-ability'>
      <button onClick={handleClick}>Set Ability</button>
    </div>
  )
}

export default PlayerAbilityMoment;