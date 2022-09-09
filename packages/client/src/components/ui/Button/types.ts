import { ButtonEnum } from '../../../types/types'

export type StyledButtonProps = {
  type: ButtonEnum
  text: string
  onClick?: () => void
}
