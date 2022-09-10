import { GameObject } from './GameObject'

export enum Direction {
  Up,
  Right,
  Down,
  Left
}

export class Character extends GameObject {
  static directionMultiplier(direction: Direction) {
    switch (direction) {
      case Direction.Down:
      case Direction.Right:
        return 1;
      case Direction.Up:
      case Direction.Left:
        return -1;
    }
  }

  protected direction: Direction = Direction.Up;

  move() {
    if(this.direction === Direction.Up || this.direction === Direction.Down) {
      this.position.y += Character.directionMultiplier(this.direction);
    } else {
      this.position.x += Character.directionMultiplier(this.direction);
    }
  }
}
