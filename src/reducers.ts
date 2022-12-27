import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player, Job, Ability, AbilityUse } from '../types'

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
type actionBarStateType = inactiveActionState | activeActionState;

const initialEncounterState: encounterStateType = {encounterName: null};
const initialPlayerState: playerStateType = {players: []};
const initialActionBarState: actionBarStateType = {active: false}

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
          abilityUses: {}
        });
      }
    },
    deletePlayer: (state: playerStateType, action: PayloadAction<number>) => {
      state.players.splice(action.payload, 1);
    },
    addAction: (state: playerStateType, action: PayloadAction<{abilityUse: AbilityUse, playerInd: number}>) => {
      const { abilityUse, playerInd } = action.payload;
      state.players[playerInd].abilityUses[abilityUse.time] = abilityUse;
    }
  }
})

export const actionBarSlice = createSlice({
  name: 'actions',
  initialState: initialActionBarState,
  reducers: {
    setInactive: (state: actionBarStateType) => {
      state = {active: false};
    },
    setActive: (state: actionBarStateType, action: PayloadAction<{time: number, job: Job, playerInd: number}>) => {
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
  addPlayer, deletePlayer, addAction
} = playerSlice.actions;

export const {
  setInactive, setActive
} = actionBarSlice.actions

export const encounterReducer = encounterSlice.reducer;
export const playerReducer = playerSlice.reducer;
export const actionBarReducer = actionBarSlice.reducer;