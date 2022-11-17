import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type encounterStateType = {encounterName: string | null};

const initialState: encounterStateType = {encounterName: null};

export const encounterSlice = createSlice({
  name: 'encounter',
  initialState,
  reducers: {
    setEncounter: (state: encounterStateType, action: PayloadAction<string>) => {
      console.log('triggered setencounter');
      state.encounterName = action.payload;
    },
  }
})

export const {
  setEncounter
} = encounterSlice.actions;

export default encounterSlice.reducer;