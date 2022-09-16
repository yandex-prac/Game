import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthType = {
  isLogginIn: boolean
}

const initialState: AuthType = {
  isLogginIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginIn(state, action: PayloadAction<boolean>) {
      state.isLogginIn = action.payload
    },
  },
})

export const { setLoginIn } = authSlice.actions
export default authSlice.reducer
