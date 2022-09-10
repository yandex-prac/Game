import { SyntheticEvent } from 'react'

type InputProps = {
  error?: string
  label?: string
  value?: string
  type?: string
  name?: string
  onChange?: (evt: SyntheticEvent, value: string) => void
  onBlur?: (evt: SyntheticEvent) => void
}

type LabelProps = {
  label?: string
}

export type { InputProps, LabelProps }
