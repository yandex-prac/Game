import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SnackBarType = {
  isOpen: boolean
  message: string
  type: string
}

const initialState: SnackBarType = {
  isOpen: false,
  message: '',
  type: '',
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<SnackBarType>) => {
      state.isOpen = action.payload.isOpen
      state.message = action.payload.message
      state.type = action.payload.type
    },
  },
})

export const { setSnackbar } = snackbarSlice.actions
export default snackbarSlice.reducer
