import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'

export type InputProps = {
  // properties
  error?: string
  label?: string
  value?: string
  type?: string
  name?: string
  // events
  onChange?: (evt: SyntheticEvent, value: string) => void
  onBlur?: (evt: SyntheticEvent) => void
}

const variables = {
  placeholderFontSize: '9px',
  placeholderMargin: '12px', // placeholderFontSize + 3px
  blue: '#3369F3',
  lightBlue: '#a4cef3',
  red: '#FF2F2F',
  fontColorSecondary: '#999999',
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${variables.placeholderMargin};
`

const Inp = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-weight: 500;
  padding: 7px 0;
`

const Label = styled.span<{ label?: string }>`
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
    color: ${variables.fontColorSecondary};
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

  ${Inp}:focus + &:before {
    width: 100%;
    background: ${variables.blue};
  }

  ${Inp}:focus + &:after,
    ${Inp}:not(.empty) + &:after {
    top: -${variables.placeholderMargin};
    font-size: ${variables.placeholderFontSize};
  }
`

const Error = styled.span`
  margin-top: 7px;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: ${variables.red};
  user-select: none;
`

export const Input = (props: InputProps) => {
  const blurHandler = (evt: SyntheticEvent) => {
    props.onBlur && props.onBlur(evt)
  }

  const changeHandler = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLInputElement
    if (target.value.length) {
      target.classList.remove('empty')
    } else {
      target.classList.add('empty')
    }

    props.onChange && props.onChange(evt, target.value)
  }
  return (
    <>
      <Wrapper>
        <Inp
          onBlur={blurHandler}
          onChange={changeHandler}
          value={props.value}
          name={props.name}
          className={props.value ? '' : 'empty'}
          type={props.type}
        />
        <Label label={props.label} />
      </Wrapper>
      {props.error ? <Error>{props.error}</Error> : null}
    </>
  )
}
