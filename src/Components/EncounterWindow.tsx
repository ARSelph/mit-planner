import React, { useEffect, useState, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addPlayer, deletePlayer } from '../reducers';
import { useGetAllJobsQuery, useGetEncounterByNameQuery, useGetJobByNameQuery } from '../rtkapi';
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
  const jobs = useGetAllJobsQuery().data;

  useEffect(() => {
    setSkip(encounter ? false : true);
  }, [encounter])

  const handleDelete = (index: number): void => {
    dispatch(deletePlayer(index));
  }

  const playerDisplays: JSX.Element[] = [];

  players.forEach((player, index) => {
    playerDisplays.push(
      <span>
        <PlayerDisplay player={player}/>
        <button onClick={()=>handleDelete(index)}>Delete</button>
      </span>
    )
  })

  const jobOptions: JSX.Element[] = [];

  if (jobs) {
    for (const job in jobs) {
      jobOptions.push(
        <option value={job}>{jobs[job].fullName}</option>
      )
    }
  }

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
      { error && <p>There was an error loading data</p> }
      { isLoading && <p>Loading encounter data...</p> }
      { data && <EncounterDisplay data={data}/> }
      {playerDisplays}
      <form onSubmit={handleAddPlayer}>
        <label>
          Add new player:
          <select value={selectedJob} onChange={handleChange}>
            {jobOptions}
          </select>
        </label>
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

export default EncounterWindow;