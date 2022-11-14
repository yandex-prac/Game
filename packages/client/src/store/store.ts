import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer, snackbarReducer } from './reducers'
import { authAPI, profileApi, chatApi, leaderboardAPI } from './services'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootStore = combineReducers({
  authReducer,
  snackbarReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [leaderboardAPI.reducerPath]: leaderboardAPI.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
})

const setupStore = () => {
  return configureStore({
    reducer: rootStore,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(authAPI.middleware)
        .concat(profileApi.middleware)
        .concat(leaderboardAPI.middleware)
        .concat(chatApi.middleware)
        .concat(sagaMiddleware),
  })
}

export default setupStore()

sagaMiddleware.run(rootSaga)

type RootState = ReturnType<typeof rootStore>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type { RootState, AppStore, AppDispatch }
