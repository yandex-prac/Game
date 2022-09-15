import { ButtonEnum } from '@/types'

type StyledButtonProps = {
  type: ButtonEnum
  textIntl: string
  margintop?: number
  onClick?: () => void
}

type ButtonProps = {
  margintop: number
}

export type { StyledButtonProps, ButtonProps }
