import styled from 'styled-components'
import { Button } from '@/components/ui/Button'

const CanvasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StartButton = styled(Button)`
  margin-top: 20px;
`

export { CanvasWrapper, StartButton }
