import React, { SyntheticEvent } from 'react'
import { Wrapper, StyledInput, Label, Error } from './StyledComponens'
import { InputProps } from './types'

export const Input = ({
  onBlur,
  onChange,
  value,
  name,
  type,
  label,
  error,
}: InputProps) => {
  const blurHandler = (evt: SyntheticEvent) => {
    onBlur?.(evt)
  }

  const changeHandler = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLInputElement
    onChange?.(evt, target.value)
  }

  return (
    <>
      <Wrapper>
        <StyledInput
          onBlur={blurHandler}
          onChange={changeHandler}
          value={value}
          name={name}
          className={value ? '' : 'empty'}
          type={type}
        />
        <Label label={label} />
      </Wrapper>
      {error ? <Error>{error}</Error> : null}
    </>
  )
}
