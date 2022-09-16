import { GameObject } from './GameObject'
import { Pacman } from './Pacman'
import { Direction } from './types'
import { Wall } from './Wall'
import { Floor } from './Floor'
import { Point } from './Point'
import { WorldProps } from '@/game/types'
import { EventBus } from '@/game/EventBus'

function isPoint(object: any): object is Point {
  return object instanceof Point
}

export class World extends EventBus {
  private readonly _objects: Set<GameObject> = new Set<GameObject>()
  private _pacman!: Pacman
  private _pointsCount = 0
  private readonly _worldConfig: WorldProps

  constructor(props: WorldProps) {
    super()

    this._worldConfig = props

    this.createWorld()
  }

  get objects(): Set<GameObject> {
    return this._objects
  }

  createWorld() {
    this._worldConfig.map.forEach((str: number[], y: number) => {
      str.forEach((col: number, x: number) => {
        switch (col) {
          case 0:
            this._objects.add(
              new Floor({
                startPosition: {
                  x: x * this._worldConfig.wallsAndFloors.size.width,
                  y: y * this._worldConfig.wallsAndFloors.size.height,
                },
                size: this._worldConfig.wallsAndFloors.size,
              })
            )
            break
          case 1:
            this._objects.add(
              new Wall({
                startPosition: {
                  x: x * this._worldConfig.wallsAndFloors.size.width,
                  y: y * this._worldConfig.wallsAndFloors.size.height,
                },
                size: this._worldConfig.wallsAndFloors.size,
              })
            )
            break
          case 2:
            this._objects.add(
              new Point({
                startPosition: {
                  x: x * this._worldConfig.wallsAndFloors.size.width,
                  y: y * this._worldConfig.wallsAndFloors.size.height,
                },
                size: this._worldConfig.wallsAndFloors.size,
              })
            )

            this._pointsCount++
            break
        }
      })
    })

    this._pacman = new Pacman(this._worldConfig.pacman)

    this._pacman.on('eatPoint', this.pacmanEatPoint)

    this._objects.add(this._pacman)
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

  pacmanEatPoint = (point: any) => {
    if (!isPoint(point)) {
      return
    }

    this._objects.add(
      new Floor({
        startPosition: {
          x: point.left,
          y: point.top,
        },
        size: this._worldConfig.wallsAndFloors.size,
      })
    )

    this.objects.delete(point)
    this.objects.delete(this._pacman)
    this.objects.add(this._pacman)

    this._pointsCount--

    if (this._pointsCount === 0) {
      this.emit('pointsEnded')
    }
  }

  reset() {
    this._objects.clear()

    this._pointsCount = 0

    this._pacman.off('eatPoint', this.pacmanEatPoint)

    this.createWorld()
  }

  update(direction?: Direction) {
    this._pacman.update(this, direction)
  }
}
