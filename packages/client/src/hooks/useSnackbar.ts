import { useEffect } from 'react'
import { setLoginIn } from '@/store/reducers/authSlice'
import { setSnackbar } from '@/store/reducers/snackbarSlice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/hooks'
import { CONTENT_RU, SNACKBAR_TYPE, PATHNAMES } from '@/utils'

type SnackbarType = {
  isSuccess: boolean
  isError: boolean
  isLoading: boolean
}

export const useSnackbar = ({
  isSuccess,
  isError,
  isLoading,
}: SnackbarType) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setLoginIn(true))
      dispatch(
        setSnackbar({
          isOpen: true,
          message: CONTENT_RU.LOGIN_SUCCESS,
          type: SNACKBAR_TYPE.SUCCESS,
        })
      )
      navigate(PATHNAMES.MAIN)
    }
    if (isError) {
      dispatch(
        setSnackbar({
          isOpen: true,
          message: CONTENT_RU.LOGIN_ERROR,
          type: SNACKBAR_TYPE.ERROR,
        })
      )
    }
  }, [isLoading])
}
