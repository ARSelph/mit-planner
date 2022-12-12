import React, { useEffect, useState, FC } from 'react';
import { Player } from '../../types';
import { useGetJobByNameQuery } from '../rtkapi';

const PlayerDisplay: FC<{player: Player}> = props => {
  const { player } = props;
  const { data, error, isLoading, isUninitialized } = useGetJobByNameQuery(player.job);
  
  
  return (
    <div>
      {data && <img src={`/public/jobIcons/${data.iconPath}`}/>}
      {data && <h5>{data.fullName}</h5>}
    </div>
  )
}

export default PlayerDisplay;