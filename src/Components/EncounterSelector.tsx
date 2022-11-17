import React, {useState, useEffect, FC} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setEncounter } from '../reducers';

const EncounterSelector: FC = () => {
  const encounter = useAppSelector(state => state.encounter);
  const dispatch = useAppDispatch();
  const [selectedEncounter, setSelectedEncounter] = useState('p8s1');
  
  const handleSubmit = (event: any) => {
    dispatch(setEncounter(selectedEncounter));
    event.preventDefault();
  }

  const handleChange = (event: any) => {
    setSelectedEncounter(event.target.value);
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select encounter:
        <select value={selectedEncounter} onChange={handleChange}>
          <option value={'p5s'}>Abyssos: The Fifth Circle (Savage)</option>
          <option value={'p6s'}>Abyssos: The Sixth Circle (Savage)</option>
          <option value={'p7s'}>Abyssos: The Seventh Circle (Savage)</option>
          <option value={'p8s1'}>Abyssos: The Eighth Circle (Savage) Part 1</option>
          <option value={'p8s2'}>Abyssos: The Eighth Circle (Savage) Part 2</option>
        </select>
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default EncounterSelector;