import { ButtonEnum } from '@/types'

type StyledButtonProps = {
  type: ButtonEnum
  text: string
  margintop?: number
  onClick?: () => void
}

type ButtonProps = {
  margintop: number
}

export type { StyledButtonProps, ButtonProps }
