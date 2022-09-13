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
      const { sprite, left, top, width, height } = object

      if (!sprite) {
        return
      }

      this.context.drawImage(sprite, left, top, width, height)
    }
  }
}
