import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers'
import { authAPI } from './services'

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

type RootState = ReturnType<typeof rootStore>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type { RootState, AppStore, AppDispatch }
