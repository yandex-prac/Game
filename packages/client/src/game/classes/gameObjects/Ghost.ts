import { Character, GameObject, Pacman, Wall, World } from '@/game/classes'
import { Coordinates, Direction } from '@/game/types'

export class Ghost extends Character {
  chooseDirection(world: World, targetPoint: Coordinates) {
    const oppositeDirection = Character.oppositeDirection(this.direction)
    const directions: [Direction, number][] = []

    for (const directionKey in Direction) {
      if (directionKey === oppositeDirection) {
        continue
      }

      const direction: Direction =
        Direction[directionKey as keyof typeof Direction]

      directions.push([
        direction,
        GameObject.distance(targetPoint, this.targetCell(direction)),
      ])
    }

    directions.sort((a, b) => {
      if (a[1] > b[1]) {
        return 1
      }

      if (a[1] < b[1]) {
        return -1
      }

      if (a[0] === Direction.Up) {
        return 1
      }

      if (b[0] === Direction.Up) {
        return -1
      }

      if (a[0] === Direction.Left) {
        return 1
      }

      if (b[0] === Direction.Left) {
        return -1
      }

      if (a[0] === Direction.Down) {
        return 1
      }

      if (b[0] === Direction.Down) {
        return -1
      }

      return 0
    })

    for (const [direction] of directions) {
      this.move(direction)

      const collisions = world.getCollisions(this)

      if (collisions.size) {
        let hasWallCollision = false

        collisions.forEach((object: GameObject) => {
          if (object instanceof Wall) {
            this.move(Character.oppositeDirection(direction))
            hasWallCollision = true
          } else if (object instanceof Pacman) {
            if (object.left === this.left && object.top === this.top) {
              this.emit('eatPacman')
            }
          }
        })

        if (!hasWallCollision) {
          this.direction = direction
          break
        }
      } else {
        this.direction = direction
        break
      }
    }
  }

  update(world: World, targetPoint: Coordinates): void {
    if (this.direction) {
      if (this.checkGrid()) {
        this.chooseDirection(world, targetPoint)
      } else {
        this.move()
      }
    } else {
      this.chooseDirection(world, targetPoint)
    }
  }
}
