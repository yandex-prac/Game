import { View } from '@/game/View'
import { World } from '@/game/World'
import world from './worldConfig'
import { Direction } from './types'

export class Game {
  private readonly canvas: HTMLCanvasElement
  private direction: Direction | undefined
  private view: View | undefined
  private world: World | undefined

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas

    // todo: старт по кнопке
    this.start()
  }

  keyUp = (evt: KeyboardEvent) => {
    switch (evt.code) {
      case 'ArrowUp':
        this.direction = Direction.Up
        break
      case 'ArrowRight':
        this.direction = Direction.Right
        break
      case 'ArrowDown':
        this.direction = Direction.Down
        break
      case 'ArrowLeft':
        this.direction = Direction.Left
        break
    }
  }

  loop = () => {
    this.world!.update(this.direction)
    this.view!.update(this.world!)

    this.direction = undefined

    requestAnimationFrame(this.loop)
  }

  start() {
    this.world = new World(world)
    this.view = new View(this.canvas)

    document.addEventListener('keydown', this.keyUp)

    requestAnimationFrame(this.loop)
  }

  stop() {
    document.removeEventListener('keydown', this.keyUp)
  }
}
