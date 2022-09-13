import { GameObject } from './GameObject'
import wall from '@/image/gameSprites/floor.svg'

export class Floor extends GameObject {
  get sprite(): HTMLImageElement {
    const img = document.createElement('img')

    img.src = wall

    return img
  }
}
