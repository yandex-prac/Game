import { GameObject } from './GameObject'
import floor from '@/image/gameSprites/floor.svg'

export class Floor extends GameObject {
  _isCollisional = false
  _sprite = floor
}
