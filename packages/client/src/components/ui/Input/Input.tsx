import React, { SyntheticEvent } from 'react'
import { Wrapper, StyledInput, Label, Error } from './StyledComponens'
import { InputProps } from './types'

export const Input = ({
  onBlur,
  onChange,
  label,
  error,
  value,
  ...rest
}: InputProps) => {
  const blurHandler = (evt: SyntheticEvent) => onBlur?.(evt)

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
          className={value ? '' : 'empty'}
          {...rest}
        />
        <Label label={label} />
      </Wrapper>
      {error ? <Error>{error}</Error> : null}
    </>
  )
}
