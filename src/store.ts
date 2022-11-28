import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { encounterReducer, playerReducer } from './reducers';
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { encounterApi, jobApi } from './rtkapi';

export const store = configureStore({
  reducer: {
    encounter: encounterReducer,
    player: playerReducer,
    [encounterApi.reducerPath]: encounterApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(encounterApi.middleware).concat(jobApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch