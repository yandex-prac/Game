import { GameObject } from './GameObject'
import { Ghost } from './Ghost'
import { Pacman } from './Pacman'
import { Direction } from './types'
import { Wall } from './Wall'
import { Floor } from './Floor'
import { WorldProps } from '@/game/types'

export class World {
  //private readonly _ghosts: Ghost[];
  private readonly _objects: Set<GameObject> = new Set<GameObject>()
  private readonly _pacman: Pacman

  constructor(props: WorldProps) {
    props.map.forEach((str: number[], y: number) => {
      str.forEach((col: number, x: number) => {
        if (col) {
          this._objects.add(
            new Wall({
              startPosition: {
                x: x * props.wallsAndFloors.size.width,
                y: y * props.wallsAndFloors.size.height,
              },
              size: props.wallsAndFloors.size,
            })
          )
        } else {
          this._objects.add(
            new Floor({
              startPosition: {
                x: x * props.wallsAndFloors.size.width,
                y: y * props.wallsAndFloors.size.height,
              },
              size: props.wallsAndFloors.size,
            })
          )
        }
      })
    })

    this._pacman = new Pacman(props.pacman)

    this._objects.add(this._pacman)
  }

  get objects(): Set<GameObject> {
    return this._objects
  }

  getCollisions(object: GameObject): Set<GameObject> {
    const collisions = new Set<GameObject>()

    if (!object.isCollisional) {
      return collisions
    }

    this._objects.forEach(another => {
      if (!another.isCollisional) {
        return
      }

      if (
        another !== object &&
        another.left < object.right &&
        another.right > object.left &&
        another.top < object.bottom &&
        another.bottom > object.top
      ) {
        collisions.add(another)
      }
    })

    return collisions
  }

  update(direction?: Direction) {
    this._pacman.update(this, direction)
  }
}
