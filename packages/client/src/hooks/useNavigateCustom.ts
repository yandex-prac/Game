import { useNavigate } from 'react-router-dom'

function useNavigateCustom(path: string, rest?: object) {
  const navigate = useNavigate()

  navigate(path, rest)
}

export { useNavigateCustom }
