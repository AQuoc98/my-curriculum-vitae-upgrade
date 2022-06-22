import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from 'features/authentication/data/slice'

const rootReducer = combineReducers({
  counter: counterSlice,
} as any)

export default rootReducer
