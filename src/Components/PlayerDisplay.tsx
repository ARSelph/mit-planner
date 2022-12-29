import React, { useEffect, useState, FC } from 'react';
import { Player } from '../../types';
import { useGetJobByNameQuery } from '../rtkapi';

const PlayerDisplay: FC<{player: Player}> = props => {
  const { player } = props;

  return (
    <div>
      <img src={`/public/jobIcons/${player.job.iconPath}`}/>
      <h5>{player.job.fullName}</h5>
    </div>
  )
}

export default PlayerDisplay;