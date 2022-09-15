import { HTMLInputTypeAttribute, SyntheticEvent } from 'react'

type InputProps = {
  // properties
  error?: string
  labelIntl: string
  value?: string
  type?: HTMLInputTypeAttribute
  name?: string
  // events
  onChange?: (evt: SyntheticEvent, value: string) => void
  onBlur?: (evt: SyntheticEvent) => void
}

type InputWrapperProps = {
  error?: string
}

type LabelProps = {
  label?: string
}

export type { InputProps, InputWrapperProps, LabelProps }
