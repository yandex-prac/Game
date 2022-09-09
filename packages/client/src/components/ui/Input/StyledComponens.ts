import styled from 'styled-components'
import variables from '../../../Variables.module.scss'
import { LabelProps } from './types'

export const Wrapper = styled.div<{ error?: string }>`
  position: relative;
  width: 100%;
  padding-top: ${variables.placeholderMargin};
  margin-bottom: ${({ error }) => error ? '0' : '17px' };
`

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-weight: 500;
  padding: 7px 0;
`

export const Label = styled.span<LabelProps>`
  position: absolute;
  display: block;
  width: 100%;
  height: calc(100% - ${variables.placeholderMargin});
  top: ${variables.placeholderMargin};
  left: 0;
  pointer-events: none;
  border-bottom: 2px solid ${variables.lightBlue};

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    transition: 0.4s top, 0.4s font-size;
  }
  &:after {
    color: ${variables.grey};
    line-height: 1.2;
    content: '${({ label }) => label}';
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 7px 0;
    transition: 0.4s top, 0.4s font-size;
  }

  ${StyledInput}:focus + &:before {
    width: 100%;
    background: ${variables.blue000};
  }

  ${StyledInput}:focus + &:after,
    ${StyledInput}:not(.empty) + &:after {
    top: -${variables.placeholderMargin};
    font-size: ${variables.placeholderFontSize};
  }
`

export const Error = styled.span`
  margin-top: 7px;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: ${variables.red};
  user-select: none;
`
