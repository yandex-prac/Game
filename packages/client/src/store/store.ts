import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'

const rootStore = combineReducers({
  authReducer,
})

export const setupStore = () => {
  return configureStore({ reducer: rootStore })
}

export type RootState = ReturnType<typeof rootStore>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
