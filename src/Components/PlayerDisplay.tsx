import React, { useEffect, useState, FC } from 'react';
import { Player } from '../../types';

const PlayerDisplay: FC<{player: Player}> = props => {
  const { player } = props;
  
  return (
    <h5>{player.job}</h5>
  )
}

export default PlayerDisplay;