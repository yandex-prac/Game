import { World } from './World'
import { Character } from './Character'
import { Direction } from '@/game/types'
import pacman from '@/image/gameSprites/pacman.svg'

export class Pacman extends Character {
  protected futureDirection: Direction | undefined = undefined

  get sprite(): HTMLImageElement {
    const img = document.createElement('img')

    img.src = pacman

    return img
  }

  update(world: World, direction?: Direction): void {
    if (direction) {
      if (this.checkGrid(direction)) {
        this.direction = direction
      } else {
        this.futureDirection = direction
      }
    } else if (this.futureDirection && this.checkGrid(this.futureDirection)) {
      this.direction = this.futureDirection
      this.futureDirection = undefined
    }

    this.move()

    const collisions = world.getCollisions(this)

    if (collisions.size) {
      this.move(Character.oppositeDirection(this.direction))
    }

    // TODO: collision with other objects
  }
}
