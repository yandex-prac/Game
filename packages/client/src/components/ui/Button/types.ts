import { ButtonEnum } from '@/types'

type StyledButtonProps = {
  type: ButtonEnum
  textIntl: string
  onClick?: () => void
  style?: Record<string, string>
}

export type { StyledButtonProps }
