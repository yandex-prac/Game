import { HTMLInputTypeAttribute, SyntheticEvent } from 'react'

export type InputProps = {
  // properties
  error?: string
  label?: string
  value?: string
  type?: HTMLInputTypeAttribute
  name?: string
  // events
  onChange?: (evt: SyntheticEvent, value: string) => void
  onBlur?: (evt: SyntheticEvent) => void
}

export type InputWrapperProps = {
  error?: string
}

export type LabelProps = {
  label?: string
}
