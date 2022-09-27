import { World } from '@/game/classes'

export class View {
  private readonly _canvas: HTMLCanvasElement
  private readonly _context: CanvasRenderingContext2D
  private readonly _loadedSprites = new Set<string>()
  private readonly _sprites: Map<string, HTMLImageElement> = new Map<
    string,
    HTMLImageElement
  >()

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas
    this._context = <CanvasRenderingContext2D>canvas.getContext('2d')
  }

  get context(): CanvasRenderingContext2D {
    return this._context
  }

  update(world: World) {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)

    for (const object of world.objects) {
      const { sprite, left, top, width, height, spriteAngle } = object

      if (!sprite) {
        continue
      }

      let img: HTMLImageElement

      if (this._sprites.has(sprite)) {
        img = <HTMLImageElement>this._sprites.get(sprite)
      } else {
        img = document.createElement('img')

        img.src = sprite

        // изображения не успевают загрузиться и не рисуются
        img.addEventListener('load', () => {
          if (!this._loadedSprites.has(sprite)) {
            this._loadedSprites.add(sprite)
            this.update(world)
          }
        })

        this._sprites.set(sprite, img)
      }

      if (spriteAngle) {
        this.context.save()

        this.context.translate(left + width / 2, top + height / 2)

        this.context.rotate((spriteAngle * Math.PI) / 180)

        this.context.drawImage(img, -width / 2, -height / 2, width, height)

        this.context.restore()
      } else {
        this.context.drawImage(img, left, top, width, height)
      }
    }
  }
}
