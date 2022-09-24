import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer, snackbarReducer } from './reducers'
import { authAPI, profileApi } from './services'

const rootStore = combineReducers({
  authReducer,
  snackbarReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
})

const setupStore = () => {
  return configureStore({
    reducer: rootStore,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(authAPI.middleware)
        .concat(profileApi.middleware),
  })
}

export default setupStore()

type RootState = ReturnType<typeof rootStore>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type { RootState, AppStore, AppDispatch }
