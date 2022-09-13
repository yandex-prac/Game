import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import { authAPI } from './services/authService'

const rootStore = combineReducers({
  authReducer,
  [authAPI.reducerPath]: authAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootStore,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(authAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootStore>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
