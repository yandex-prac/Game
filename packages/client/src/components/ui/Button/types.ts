import { ButtonEnum } from '@/types'

type StyledButtonProps = {
  type: ButtonEnum
  text: string
  onClick?: () => void
}

export type { StyledButtonProps }
