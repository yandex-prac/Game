import { View } from '@/game/View'
import { World } from '@/game/World'
import worldConfig from './worldConfig'
import { Direction } from './types'
import { EventBus } from '@/game/EventBus'

export class Game extends EventBus {
  private readonly _canvas: HTMLCanvasElement
  private _direction: Direction | undefined
  private _isStopped = true
  private readonly _view: View
  private readonly _world: World

  constructor(canvas: HTMLCanvasElement) {
    super()

    this._canvas = canvas

    this._world = new World(worldConfig)

    this._world.on('pointsEnded', this.endGame)

    this._view = new View(this._canvas)

    this._view.update(this._world)
  }

  private endGame = () => {
    this.stop()

    this.emit('endGame')
  }

  private keyUp = (evt: KeyboardEvent) => {
    switch (evt.code) {
      case 'ArrowUp':
        this._direction = Direction.Up
        break
      case 'ArrowRight':
        this._direction = Direction.Right
        break
      case 'ArrowDown':
        this._direction = Direction.Down
        break
      case 'ArrowLeft':
        this._direction = Direction.Left
        break
    }
  }

  private loop = () => {
    if (this._isStopped) {
      return
    }

    this._world.update(this._direction)
    this._view.update(this._world)

    this._direction = undefined

    requestAnimationFrame(this.loop)
  }

  start() {
    // защита от нескольких запусков
    if (!this._isStopped) {
      return
    }

    this._isStopped = false

    this._world.reset()

    this._view.update(this._world)

    document.addEventListener('keydown', this.keyUp)

    requestAnimationFrame(this.loop)
  }

  stop() {
    this._isStopped = true

    document.removeEventListener('keydown', this.keyUp)

    this._direction = undefined
  }
}
