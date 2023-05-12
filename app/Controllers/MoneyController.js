import { appState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
import { setText } from "../Utils/Writer.js";


function _drawMoney() {
  console.log('drawing money');
  let money = appState.money
  setText('money', money)
}


export class MoneyController {
  constructor() {
    // console.log('money');
    // _drawMoney()
    appState.on('money', _drawMoney)
  }

  addMoney() {
    moneyService.addMoney()
  }
  subtractMoney() {
    moneyService.subtractMoney() 
  }
}