import React, { useEffect, useState, FC } from 'react';
import { useAppSelector } from '../hooks';
import { Ability, AbilityEffects, initialAbilityEffects, Player, AbilityUse } from '../../types';

const MitTotal: FC<{time:number}> = props => {
  const { time } = props;
  const players = useAppSelector(state => state.player.players);
  const actions: AbilityUse[] = [];

  const effectTotal: {
    party: AbilityEffects,
    [key: number]: AbilityEffects
  } = {
    party: initialAbilityEffects
  }

  players.forEach((player, i) => {
    player.abilityUses[time]?.forEach(abilityUse => {
      actions.push(abilityUse);
    });
    effectTotal[i] = initialAbilityEffects;
  });

  return (
    <td>
      <p>Total Mit</p>

    </td>
  )
}

export default MitTotal;