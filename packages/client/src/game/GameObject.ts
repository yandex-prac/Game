export type Coordinates = {
  x: number
  y: number
}

export type GameObjectProps = {
  startPosition: Coordinates
}

export class GameObject {
  protected position: Coordinates

  readonly cellSize: number

  constructor(props: GameObjectProps, cellSize: number) {
    this.position = props.startPosition
    this.cellSize = cellSize
  }

  get bottom(): number {
    return this.position.y + this.cellSize
  }

  get left(): number {
    return this.position.x
  }

  get right(): number {
    return this.position.x + this.cellSize
  }

  get sprite(): HTMLImageElement | undefined {
    return
  }

  get top(): number {
    return this.position.y
  }

  update(...args: any[]): void {
    return
  }
}
