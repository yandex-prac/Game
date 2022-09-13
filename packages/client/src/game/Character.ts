import { GameObject } from './GameObject'
import { CharacterProps } from '@/game/types'
import { Direction } from '@/game/types'

export class Character extends GameObject {
  static directionMultiplier(direction: Direction): -1 | 1 {
    switch (direction) {
      case Direction.Down:
      case Direction.Right:
        return 1
      case Direction.Up:
      case Direction.Left:
        return -1
    }
  }

  static oppositeDirection(direction: Direction): Direction {
    switch (direction) {
      case Direction.Down:
        return Direction.Up
      case Direction.Right:
        return Direction.Left
      case Direction.Up:
        return Direction.Down
      case Direction.Left:
        return Direction.Right
    }
  }

  protected direction: Direction = Direction.Right
  private readonly _cell: number
  private readonly _speed: number

  constructor(props: CharacterProps) {
    super(props)

    this._cell = props.cell
    this._speed = props.speed
  }

  get cell(): number {
    return this._cell
  }

  get speed(): number {
    return this._speed
  }

  checkGrid(direction: Direction): boolean {
    switch (direction) {
      case Direction.Up:
      case Direction.Down:
        return this.left % this.cell === 0
      case Direction.Right:
      case Direction.Left:
        return this.top % this.cell === 0
    }
  }

  move(direction?: Direction) {
    direction = direction ?? this.direction

    if (direction === Direction.Up || direction === Direction.Down) {
      this.position.y += Character.directionMultiplier(direction) * this.speed
    } else {
      this.position.x += Character.directionMultiplier(direction) * this.speed
    }
  }
}
