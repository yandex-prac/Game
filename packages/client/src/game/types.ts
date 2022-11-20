type Coordinates = {
  x: number
  y: number
}

type Size = {
  width: number
  height: number
}

type GameObjectProps = {
  startPosition: Coordinates
  size: Size
}

type CharacterProps = {
  speed: number
  cell: number
} & GameObjectProps

type WorldProps = {
  map: number[][]
  pacman: CharacterProps
  redGhost: CharacterProps
  wallsAndFloors: {
    size: Size
  }
}

enum Direction {
  Up = 'Up',
  Right = 'Right',
  Down = 'Down',
  Left = 'Left',
}

export type { Coordinates, Size, GameObjectProps, CharacterProps, WorldProps }
export { Direction }
