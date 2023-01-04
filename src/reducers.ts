import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { JobString } from "../server/jobData/allJobs";
import { Player, Job, Ability, AbilityUse } from '../types'

type encounterStateType = {encounterName: string | null};
type playerStateType = {
  players: Player[]
}
// type inactiveActionState = {
//   active: false,
//   time?: never,
//   job?: never,
//   playerInd?: never
// };
// type activeActionState = {
//   active: true,
//   time: number,
//   job: Job,
//   playerInd: number
// }
type actionBarStateType = {
  active: boolean,
  time: number | null,
  job: Job | null,
  playerInd: number | null
}

const initialEncounterState: encounterStateType = {encounterName: null};
const initialPlayerState: playerStateType = {players: []};
const initialActionBarState: actionBarStateType = {
  active: false,
  time: null,
  job: null,
  playerInd: null
}

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
    addPlayer: (state: playerStateType, action: PayloadAction<Job>) => {
      if (state.players.length < 8) {
        state.players.push({
          job: action.payload,
          abilityUses: {},
          cooldowns: {}
        });
      }
    },
    deletePlayer: (state: playerStateType, action: PayloadAction<number>) => {
      state.players.splice(action.payload, 1);
    },
    addAction: (state: playerStateType, action: PayloadAction<{abilityUse: AbilityUse, playerInd: number}>) => {
      const { abilityUse, playerInd } = action.payload;
      // commented out code here will prevent ability use when on cooldown
      // I disabled it because it does not yet account for charges
      // let newCds: number[];
      // if (state.players[playerInd].cooldowns[abilityUse.ability.name]) {
      //   const testCds = [...state.players[playerInd].cooldowns[abilityUse.ability.name]];
      //   testCds.push(abilityUse.time);
      //   testCds.sort((a, b) => a - b);
      //   for (let i = 0; i < testCds.length - 1; i++) {
      //     if (testCds[i + 1] - testCds[i] < abilityUse.ability.recast) {
      //       alert('action rejected due to cooldown');
      //       return;
      //     }
      //   }
      //   newCds = testCds;
      // } else newCds = [abilityUse.time];
      if (!state.players[playerInd].abilityUses[abilityUse.time]) {
        state.players[playerInd].abilityUses[abilityUse.time] = [];
      }
      for (const ability of state.players[playerInd].abilityUses[abilityUse.time]) {
        if (current(ability.ability) === abilityUse.ability) return;
      }
      state.players[playerInd].abilityUses[abilityUse.time].push(abilityUse)
      // optimize this later
      // if (!state.players[playerInd].cooldowns[abilityUse.ability.name]) {
      //   state.players[playerInd].cooldowns[abilityUse.ability.name] = [];
      // }
      // state.players[playerInd].cooldowns[abilityUse.ability.name] = newCds;
      // state.players[playerInd].cooldowns[abilityUse.ability.name].push(abilityUse.time);
      // state.players[playerInd].cooldowns[abilityUse.ability.name].sort((a, b) => a - b);
    },
    deleteAction: (state: playerStateType, action: PayloadAction<{time: number, playerInd: number, abilityInd: number, name: string}>) => {
      const { time, playerInd, abilityInd, name } = action.payload;
      state.players[playerInd].abilityUses[time].splice(abilityInd, 1);
      // state.players[playerInd].cooldowns[name].splice(state.players[playerInd].cooldowns[name].indexOf(time), 1);
    }
  }
})

export const actionBarSlice = createSlice({
  name: 'actionBar',
  initialState: initialActionBarState,
  reducers: {
    setInactive: (state: actionBarStateType) => {
      return state = {
        active: false,
        time: null,
        job: null,
        playerInd: null
      };
    },
    setActive: (state: actionBarStateType, action: PayloadAction<{time: number, job: Job, playerInd: number}>) => {
      console.log('setting action bar to active');
      const { time, job, playerInd } = action.payload;
      return state = {
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
  addPlayer, deletePlayer, addAction, deleteAction
} = playerSlice.actions;

export const {
  setInactive, setActive
} = actionBarSlice.actions

export const encounterReducer = encounterSlice.reducer;
export const playerReducer = playerSlice.reducer;
export const actionBarReducer = actionBarSlice.reducer;