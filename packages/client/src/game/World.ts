import { GameObject, GameObjectProps, Size } from './GameObject'
import { Ghost } from './Ghost'
import { Pacman } from './Pacman'
import { Direction } from './Character'
import { Wall } from './Wall'

export enum Input {
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ArrowLeft
}

export type WorldProps = {
  map: boolean[][],
  pacman: GameObjectProps,
  walls: {
    size: Size
  }
}

// Начало координат - левый верхний угол!

export class World {
  //private readonly _ghosts: Ghost[];
  private readonly _objects: Set<GameObject> = new Set<GameObject>();
  private readonly _pacman: Pacman;

  constructor(props: WorldProps) {
    props.map.forEach((str: boolean[], y: number) => {
      str.forEach((col: boolean, x: number) => {
        if(col) {
          this._objects.add(new Wall({ size: props.walls.size, startPosition: { x, y } }));
        }
      });
    });

    this._pacman = new Pacman(props.pacman);

    this._objects.add(this._pacman);
  }

  getCollisions(object: GameObject): Set<GameObject> {
    const collisions = new Set<GameObject>();

    this._objects.forEach((another) => {
      if(another !== object && (another.left < object.right || another.right > object.left || another.top < object.bottom || another.bottom > object.top)) {
        collisions.add(another);
      }
    });

    return collisions;
  }

  update(input: Input) {
    let newDirection;

    switch (input) {
      case Input.ArrowUp:
        newDirection = Direction.Up;
        break;
      case Input.ArrowRight:
        newDirection = Direction.Right;
        break;
      case Input.ArrowDown:
        newDirection = Direction.Down;
        break;
      case Input.ArrowLeft:
        newDirection = Direction.Left;
        break;
    }

    this._pacman.update(this, newDirection);
  }
}
