import { ButtonEnum } from '../../../types'

export type StyledButtonProps = {
  type: ButtonEnum
  text: string
  onClick?: () => void
}
