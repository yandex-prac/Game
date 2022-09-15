import { GameObjectProps, Coordinates, Size } from '@/game/types'
import { EventBus } from '@/game/EventBus'

export class GameObject extends EventBus {
  protected _isCollisional = true
  protected _sprite: string | undefined
  protected position: Coordinates
  private _img: HTMLImageElement | undefined
  private readonly size: Size

  constructor(props: GameObjectProps) {
    super()

    this.position = props.startPosition
    this.size = props.size
  }

  get bottom(): number {
    return this.position.y + this.size.height
  }

  get isCollisional(): boolean {
    return this._isCollisional
  }

  get height(): number {
    return this.size.height
  }

  get left(): number {
    return this.position.x
  }

  get right(): number {
    return this.position.x + this.width
  }

  get sprite(): HTMLImageElement | undefined {
    if (!this._img && this._sprite) {
      this._img = document.createElement('img')

      this._img.src = this._sprite
    }

    return this._img
  }

  get spriteAngle(): number | undefined {
    return
  }

  get top(): number {
    return this.position.y
  }

  get width(): number {
    return this.size.width
  }

  update(...args: any[]): void {
    return
  }
}
