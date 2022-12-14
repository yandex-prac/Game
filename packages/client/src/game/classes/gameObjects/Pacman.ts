import { Character, GameObject, Point, Wall, World } from '@/game/classes'
import { Direction } from '@/game/types'
import pacman from '@/image/gameSprites/pacman.svg'

export class Pacman extends Character {
  protected futureDirection: Direction | undefined = undefined

  sprite = pacman

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
      collisions.forEach((object: GameObject) => {
        if (object instanceof Wall) {
          this.move(Character.oppositeDirection(this.direction))
        } else if (object instanceof Point) {
          if (object.left === this.left && object.top === this.top) {
            this.emit('eatPoint', object)
          }
        }
      })
    }
  }
}
