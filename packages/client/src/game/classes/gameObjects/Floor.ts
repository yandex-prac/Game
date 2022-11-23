import { GameObject } from './GameObject'
import { floor } from '@/image'

export class Floor extends GameObject {
  _isCollisional = false
  sprite = floor
}
