import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { encounterReducer, playerReducer } from './reducers';
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { encounterApi } from './rtkapi';

export const store = configureStore({
  reducer: {
    encounter: encounterReducer,
    player: playerReducer,
    [encounterApi.reducerPath]: encounterApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(encounterApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch