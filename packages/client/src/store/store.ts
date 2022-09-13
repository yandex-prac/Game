import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import { authAPI } from './services/authService'

const rootStore = combineReducers({
  authReducer,
  [authAPI.reducerPath]: authAPI.reducer,
})

const setupStore = () => {
  return configureStore({
    reducer: rootStore,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(authAPI.middleware),
  })
}

export default setupStore()

export type RootState = ReturnType<typeof rootStore>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
