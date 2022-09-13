import React, { SyntheticEvent } from 'react'
import { Wrapper, StyledInput, Label, Error } from './StyledComponens'
import { InputProps } from './types'
import { useIntl } from 'react-intl'

export const Input = ({
  onBlur,
  onChange,
  value,
  type = 'text',
  label,
  error,
  ...props
}: InputProps) => {
  const intl = useIntl()

  const blurHandler = (evt: SyntheticEvent) => {
    onBlur?.(evt)
  }

  const changeHandler = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLInputElement
    onChange?.(evt, target.value)
  }

  return (
    <>
      <Wrapper error={error}>
        <StyledInput
          onBlur={blurHandler}
          onChange={changeHandler}
          className={value ? '' : 'empty'}
          type={type}
          value={value}
          {...props}
        />
        <Label label={`${intl.messages[label] || ''}`} />
      </Wrapper>
      {error ? <Error>{error}</Error> : null}
    </>
  )
}
