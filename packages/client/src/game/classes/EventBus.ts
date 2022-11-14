type args = any[]

type func = (arg?: args) => void

export class EventBus {
  private readonly _events = new Map()

  on(event: string, handler: func) {
    if (this._events.has(event)) {
      this._events.get(event).add(handler)
    } else {
      this._events.set(event, new Set([handler]))
    }
  }

  off(event: string, handler: func) {
    this._events.get(event)?.delete(handler)
  }

  emit(event: string, ...arg: args) {
    this._events.get(event)?.forEach((handler: func) => handler(...arg))
  }
}
