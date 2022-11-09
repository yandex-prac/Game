import styled from 'styled-components'
import variables from '@/Variables.module.scss'
import { WrapperType } from './types'

const Wrapper = styled.div<WrapperType>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variables.overlay};
  cursor: pointer;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: 0.3s opacity, 0.3s visibility;
`

const Inner = styled.div`
  padding: 50px 30px 20px;
  max-width: 320px;
  width: 100%;
  min-height: 400px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  cursor: default;
`

const Title = styled.h2`
  margin: 0 0 50px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`

export { Wrapper, Inner, Title }
