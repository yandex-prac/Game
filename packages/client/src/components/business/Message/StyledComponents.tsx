import styled from 'styled-components'
import variables from '@/Variables.module.scss'

export const MessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  margin: 10px;
  border: 1px solid ${variables.grey000};
  overflow: auto;
`
