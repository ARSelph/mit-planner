import React, { useEffect, useState, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addPlayer, deletePlayer } from '../reducers';
import { useGetEncounterByNameQuery } from '../rtkapi';
import EncounterDisplay from './EncounterDisplay';
import PlayerDisplay from './PlayerDisplay';
import { Player } from '../../types';


const EncounterWindow: FC = () => {
  const encounter = useAppSelector(state => state.encounter.encounterName || '');
  const players = useAppSelector(state => state.player.players);
  const dispatch = useAppDispatch();
  const [skip, setSkip] = useState(true);
  const [selectedJob, setSelectedJob] = useState('');
  const { data, error, isLoading, isUninitialized } = useGetEncounterByNameQuery(encounter, { skip });

  useEffect(() => {
    setSkip(encounter ? false : true);
  }, [encounter])

  const playerDisplays: JSX.Element[] = [];

  players.forEach(player => {
    playerDisplays.push(<PlayerDisplay player={player}/>)
  })

  const handleAddPlayer = (event: any) => {
    if (selectedJob.length) dispatch(addPlayer(selectedJob));
    event.preventDefault();
  }
  const handleChange = (event: any) => {
    setSelectedJob(event.target.value);
    event.preventDefault();
  }

  return (
    <div>
      Encounter Window
      { isUninitialized && <p>No encounter selected</p>}
      { !!error && <p>There was an error loading data</p> }
      { isLoading && <p>Loading encounter data...</p> }
      {/* { !!data && <h3>{data.bossName}</h3>} */}
      { !!data && <EncounterDisplay data={data}/> }
      {playerDisplays}
      <form onSubmit={handleAddPlayer}>
        <label>
          Add new player:
          <select value={selectedJob} onChange={handleChange}>
            <option value={'whm'}>White Mage</option>
            <option value={'sch'}>Scholar</option>
            <option value={'ast'}>Astrologian</option>
            <option value={'sge'}>Sage</option>
            <option value={'war'}>Warrior</option>
          </select>
        </label>
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

export default EncounterWindow;