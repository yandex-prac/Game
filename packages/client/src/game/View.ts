import { World } from '@/game/World'

export class View {
  private readonly _canvas: HTMLCanvasElement
  private readonly _context: CanvasRenderingContext2D

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
        return
      }

      if (spriteAngle) {
        this.context.save()

        this.context.translate(left + width / 2, top + height / 2)

        this.context.rotate((spriteAngle * Math.PI) / 180)

        this.context.drawImage(sprite, -width / 2, -height / 2, width, height)

        this.context.restore()
      } else {
        this.context.drawImage(sprite, left, top, width, height)
      }
    }
  }
}
