import styled from 'styled-components'
import { InputGroupProps } from './types'

const InputGroup = styled.fieldset<InputGroupProps>`
  margin: 0;
  padding: 0;
  border: 0;
  height: 30px;
  position: relative;
  padding-bottom: 24px;
  margin-bottom: ${({ lastGroup }) => (lastGroup ? '160px' : '0')};
`
const YandexAuthButton = styled.button`
  border: none;
  background: transparent;
  width: 188px;
  height: 36px;
  padding: 0;
  cursor: pointer;
  margin: 0 auto 14px auto;
`

export { InputGroup, YandexAuthButton }
