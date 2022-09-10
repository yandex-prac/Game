import { World } from './World'
import { Character, Direction } from './Character'

export class Pacman extends Character {
  update(world: World, direction: Direction | undefined): void {
    if(direction) {
      this.direction = direction;
    }

    this.move();

    const collisions = world.getCollisions(this);

/*    if() {
      this.direction = Character.directionMultiplier(this.direction) * (-1);
    }*/

    // TODO: collision with other objects
  }
}
