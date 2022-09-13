import { View } from '@/game/View'
import { Input, World } from '@/game/World'
import world from './worldConfig'

export class Game {
  private readonly canvas: HTMLCanvasElement
  private input: Input | undefined
  private view: View | undefined
  private world: World | undefined

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas

    this.loop = this.loop.bind(this)

    // todo: старт по кнопке
    this.start()
  }

  loop() {
    this.world!.update(this.input)
    this.view!.update(this.world!)

    this.input = undefined

    requestAnimationFrame(this.loop)
  }

  start() {
    this.world = new World(world)
    this.view = new View(this.canvas)

    requestAnimationFrame(this.loop)
  }
}
