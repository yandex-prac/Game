import { GameObject, Coordinates } from './GameObject'

export abstract class Ghost extends GameObject {
  abstract _targetPoint: Coordinates
}
