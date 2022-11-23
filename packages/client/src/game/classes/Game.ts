import { EventBus, View, World } from '@/game/classes'
import worldConfig from '../worldConfig'
import { Direction } from '../types'

export class Game extends EventBus {
  private readonly _canvas: HTMLCanvasElement
  private _direction?: Direction
  private _isStopped = true
  private readonly _view: View
  private readonly _world: World
  constructor(canvas: HTMLCanvasElement) {
    super()

    this._canvas = canvas

    this._world = new World(worldConfig)

    this._world.on('pointsEnded', () => {
      this.stop()
      this.emit('win')
    })

    this._world.on('gameOver', () => {
      this.stop()
      this.emit('lose')
    })

    this._view = new View(this._canvas)

    this._view.update(this._world)
  }

  private keyUp = (evt: KeyboardEvent) => {
    switch (evt.code) {
      case 'ArrowUp':
        return (this._direction = Direction.Up)
      case 'ArrowRight':
        return (this._direction = Direction.Right)
      case 'ArrowDown':
        return (this._direction = Direction.Down)
      case 'ArrowLeft':
        return (this._direction = Direction.Left)
    }
  }

  private loop = () => {
    if (this._isStopped) {
      return
    }

    this._world.update(this._direction)
    this._view.update(this._world)

    this._direction = undefined

    if (navigator.getGamepads().filter(count => count !== null).length > 0) {
      window.requestAnimationFrame(this.gameLoop)
    }

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
    window.addEventListener('gamepadconnected', this.gameLoop)

    requestAnimationFrame(this.loop)
  }

  gameLoop = () => {
    const gamepads = navigator.getGamepads()
    if (gamepads[0]) {
      const gp = gamepads[0]
      const buttonPressed: string | undefined = Object.keys(
        gp.buttons.map(button => button.pressed)
      ).find(
        (button: any) =>
          gp.buttons.map(button => button.pressed)[button] === true
      )

      switch (buttonPressed) {
        case '12':
          return (this._direction = Direction.Up)
        case '15':
          return (this._direction = Direction.Right)
        case '13':
          return (this._direction = Direction.Down)
        case '14':
          return (this._direction = Direction.Left)
      }
    }
  }

  stop() {
    this._isStopped = true

    document.removeEventListener('keydown', this.keyUp)
    window.removeEventListener('gamepadconnected', this.gameLoop)

    this._direction = undefined
  }
}
