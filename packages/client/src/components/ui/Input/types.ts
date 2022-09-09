import { SyntheticEvent } from 'react'

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

export type LabelProps = {
  label?: string
}
