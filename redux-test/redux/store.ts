import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/conterSile'
import contReducer from './features/contSile'
import { userApi } from './service/userApi' 
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counterReducer,
    contReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefultMiddleware) => 
  getDefultMiddleware().concat([userApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch