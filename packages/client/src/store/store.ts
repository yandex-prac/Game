import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers'
import { authAPI, profileApi } from './services'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootStore = combineReducers({
  authReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
})

const setupStore = () => {
  return configureStore({
    reducer: rootStore,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(authAPI.middleware)
        .concat(profileApi.middleware)
        .concat(sagaMiddleware),
  })
}

export default setupStore()

sagaMiddleware.run(rootSaga)

type RootState = ReturnType<typeof rootStore>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type { RootState, AppStore, AppDispatch }
