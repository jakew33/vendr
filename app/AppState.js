import { Value } from "./Models/Value.js"
import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  
  snacks = [
    new Snack ({name: 'Cheetos', price: 3.50,}),
    new Snack ({name: 'Bugles', price: 2.25,}),
    new Snack ({name: 'Coke', price: 2.50,}),
  ]

  money = 0
}























export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
