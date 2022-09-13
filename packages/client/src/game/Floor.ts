import { GameObject } from './GameObject'
import wall from '@/image/gameSprites/floor.svg'

export class Floor extends GameObject {
  _isCollisional = false

  get sprite(): HTMLImageElement {
    const img = document.createElement('img')

    img.src = wall

    return img
  }
}
