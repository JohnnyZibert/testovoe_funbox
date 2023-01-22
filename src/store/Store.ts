import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import selectOnClickReducer from './selectOnclick/selectOnclick'

export const store = configureStore({
  reducer: {
    isClickedCard: selectOnClickReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
