import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLoginIn, setSnackbar } from '@/store'
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
      localStorage.setItem(CONTENT_RU.IS_LOGIN_IN, 'true')
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
