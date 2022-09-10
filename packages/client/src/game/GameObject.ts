export type Coordinates = {
  x: number,
  y: number
}

export type GameObjectProps = {
  size: Size,
  startPosition: Coordinates
}

export type Size = {
  width: number,
  height: number
}

export class GameObject {
  protected position: Coordinates;

  readonly size: Size;

  constructor(props: GameObjectProps) {
    this.position = props.startPosition;
    this.size = props.size;
  }

  get bottom() {
    return this.position.y + this.size.height / 2;
  }

  get left() {
    return this.position.x - this.size.width / 2;
  }

  get right() {
    return this.position.x + this.size.width / 2;
  }

  get top() {
    return this.position.y - this.size.height / 2;
  }

  update(...args: any[]): void {
    return;
  }
}
