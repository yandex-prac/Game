import { GameObject } from './GameObject'
import wall from '@/image/gameSprites/wall.svg'

export class Wall extends GameObject {
  get sprite(): HTMLImageElement {
    const img = document.createElement('img')

    img.src = wall

    return img
  }
}
