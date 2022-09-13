import { World } from './World'
import { Character, Direction } from './Character'
import pacman from '@/image/gameSprites/pacman.svg'

export class Pacman extends Character {
  get sprite(): HTMLImageElement {
    const img = document.createElement('img')

    img.src = pacman

    return img
  }

  update(world: World, direction: Direction | undefined): void {
    if (direction) {
      this.direction = direction
    }

    //this.move();

    const collisions = world.getCollisions(this)

    /*    if() {
      this.direction = Character.directionMultiplier(this.direction) * (-1);
    }*/

    // TODO: collision with other objects
  }
}
