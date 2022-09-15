import { WorldProps } from './types'

const cell = 40

const size = {
  width: cell,
  height: cell,
}

const world: WorldProps = {
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 1, 2, 2, 1, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 0, 2, 1, 2, 2, 1, 2, 0, 1],
    [1, 2, 1, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 1, 2, 2, 1, 2, 2, 1],
    [1, 0, 2, 1, 1, 1, 1, 2, 0, 1],
    [1, 1, 2, 2, 2, 0, 2, 2, 1, 1],
    [1, 2, 2, 2, 1, 1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  pacman: {
    cell,
    startPosition: {
      x: 5 * size.width,
      y: 7 * size.height,
    },
    size,
    speed: 2,
  },
  wallsAndFloors: {
    size,
  },
}

export default world
