import styled, { keyframes } from 'styled-components'
import variables from '@/Variables.module.scss'

const fadein = keyframes`
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 1rem;
    opacity: 1;
  }
`

const fadeout = keyframes`
  from {
    bottom: 1rem;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
`

const StyledText = styled.div`
  font-size: 16px;
  position: absolute;
  left: 58px;
`

const StyledSnackbar = styled.div`
  width: 476px;
  height: 48px;

  position: fixed;
  z-index: 9999;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  padding: 0 1rem;
  color: ${variables.white000};

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${fadein} 0.2s, ${fadeout} 0.2s 4s;

  &.success {
    background-color: ${variables.green000};
  }

  &.error {
    background-color: ${variables.red100};
  }

  &.warning {
    background-color: ${variables.orange000};
  }

  &.information {
    background-color: ${variables.blue300};
  }
`

const StyledCloseIcon = styled.img`
  cursor: pointer;
`

const StyledTypeIcon = styled.img`
  width: 20px;
  height: 20px;
`
export { StyledText, StyledSnackbar, StyledCloseIcon, StyledTypeIcon }
