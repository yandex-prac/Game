import { GameObject, GameObjectProps } from './GameObject'
import { Ghost } from './Ghost'
import { Pacman } from './Pacman'
import { Direction } from './Character'
import { Wall } from './Wall'
import { Floor } from './Floor'

export enum Input {
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
}

export type WorldProps = {
  cellSize: number
  map: number[][]
  pacman: GameObjectProps
}

// Начало координат - левый верхний угол!

export class World {
  //private readonly _ghosts: Ghost[];
  private readonly _objects: Set<GameObject> = new Set<GameObject>()
  private readonly _pacman: Pacman

  constructor(props: WorldProps) {
    props.map.forEach((str: number[], y: number) => {
      str.forEach((col: number, x: number) => {
        if (col) {
          this._objects.add(
            new Wall(
              {
                startPosition: { x: x * props.cellSize, y: y * props.cellSize },
              },
              props.cellSize
            )
          )
        } else {
          this._objects.add(
            new Floor(
              {
                startPosition: { x: x * props.cellSize, y: y * props.cellSize },
              },
              props.cellSize
            )
          )
        }
      })
    })

    this._pacman = new Pacman(props.pacman, props.cellSize)

    this._objects.add(this._pacman)
  }

  get objects(): Set<GameObject> {
    return this._objects
  }

  getCollisions(object: GameObject): Set<GameObject> {
    const collisions = new Set<GameObject>()

    this._objects.forEach(another => {
      if (
        another !== object &&
        (another.left < object.right ||
          another.right > object.left ||
          another.top < object.bottom ||
          another.bottom > object.top)
      ) {
        collisions.add(another)
      }
    })

    return collisions
  }

  update(input?: Input) {
    let newDirection

    switch (input) {
      case Input.ArrowUp:
        newDirection = Direction.Up
        break
      case Input.ArrowRight:
        newDirection = Direction.Right
        break
      case Input.ArrowDown:
        newDirection = Direction.Down
        break
      case Input.ArrowLeft:
        newDirection = Direction.Left
        break
    }

    this._pacman.update(this, newDirection)
  }
}
