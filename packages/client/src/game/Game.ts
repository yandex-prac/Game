import { View } from '@/game/View'
import { World } from '@/game/World'
import world from './worldConfig'
import { Direction } from './types'

export class Game {
  private readonly _canvas: HTMLCanvasElement
  private _isStopped = false
  private direction: Direction | undefined
  private view: View | undefined
  private world: World | undefined

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas

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

    if (this._isStopped) {
      return
    }

    requestAnimationFrame(this.loop)
  }

  start() {
    this.world = new World(world)
    this.view = new View(this._canvas)

    document.addEventListener('keydown', this.keyUp)

    this.world.on('pointsEnded', () => {
      this._isStopped = true

      console.log('game ended')
    })

    requestAnimationFrame(this.loop)
  }

  stop() {
    document.removeEventListener('keydown', this.keyUp)
  }
}
