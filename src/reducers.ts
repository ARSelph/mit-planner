import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from '../types'

type encounterStateType = {encounterName: string | null};
type playerStateType = {
  players: Player[];
}

const initialEncounterState: encounterStateType = {encounterName: null};
const initalPlayerState: playerStateType = {players: []}

export const encounterSlice = createSlice({
  name: 'encounter',
  initialState: initialEncounterState,
  reducers: {
    setEncounter: (state: encounterStateType, action: PayloadAction<string>) => {
      console.log('triggered setencounter');
      state.encounterName = action.payload;
    },
  }
})

export const playerSlice = createSlice({
  name: 'players',
  initialState: initalPlayerState,
  reducers: {
    addPlayer: (state: playerStateType, action: PayloadAction<string>) => {
      if (state.players.length < 8) {
        state.players.push({job: action.payload});
      }
    },
    deletePlayer: (state: playerStateType, action: PayloadAction<number>) => {
      state.players.splice(action.payload, 1);
    }
  }
})

export const {
  setEncounter
} = encounterSlice.actions;

export const {
  addPlayer, deletePlayer
} = playerSlice.actions;

export const encounterReducer = encounterSlice.reducer;
export const playerReducer = playerSlice.reducer;