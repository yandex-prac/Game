import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RenderIconType } from '@/types'

type SnackBarType = {
  isOpen: boolean
  message: string
  type: RenderIconType
}

const initialState: SnackBarType = {
  isOpen: false,
  message: '',
  type: 'success',
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
