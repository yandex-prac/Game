import { ButtonEnum } from '@/types'

type StyledButtonProps = {
  type: ButtonEnum
  textIntl: string
  onClick?: () => void
  style?: any
}

export type { StyledButtonProps }
