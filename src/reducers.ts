import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player, Job } from '../types'

type encounterStateType = {encounterName: string | null};
type playerStateType = {
  players: Player[]
}
type inactiveActionState = {
  active: false,
  time?: never,
  job?: never,
  playerInd?: never
};
type activeActionState = {
  active: true,
  time: number,
  job: Job,
  playerInd: number
}
type actionStateType = inactiveActionState | activeActionState;

const initialEncounterState: encounterStateType = {encounterName: null};
const initialPlayerState: playerStateType = {players: []};
const initialActionState: actionStateType = {active: false}

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
  initialState: initialPlayerState,
  reducers: {
    addPlayer: (state: playerStateType, action: PayloadAction<string>) => {
      if (state.players.length < 8) {
        state.players.push({
          job: action.payload,
          abilityUses: []
        });
      }
    },
    deletePlayer: (state: playerStateType, action: PayloadAction<number>) => {
      state.players.splice(action.payload, 1);
    }
  }
})

export const actionSlice = createSlice({
  name: 'actions',
  initialState: initialActionState,
  reducers: {
    setInactive: (state: actionStateType) => {
      state = {active: false};
    },
    setActive: (state: actionStateType, action: PayloadAction<{time: number, job: Job, playerInd: number}>) => {
      const { time, job, playerInd } = action.payload;
      state = {
        active: true,
        time,
        job,
        playerInd
      }
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