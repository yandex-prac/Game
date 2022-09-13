import { GameObjectProps, Coordinates, Size } from '@/game/types'

export class GameObject {
  protected _isCollisional = true
  protected position: Coordinates
  private readonly size: Size

  constructor(props: GameObjectProps) {
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
