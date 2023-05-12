import { appState } from "../AppState.js";


class MoneyService {
  addMoney() {
    appState.money+=.25
    console.log('adding money', appState.money);
  }

  subtractMoney(snack) {
    appState.money-=snack.price
  }
}

export const moneyService = new MoneyService()