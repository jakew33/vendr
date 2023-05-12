import { appState } from "../AppState.js";
import { moneyService } from "./MoneyService.js";

class SnackService {
 
  setActive(snackName) {
    console.log(snackName);
    let foundSnack = appState.snacks.find (snack => snack.name == snackName)
    console.log(foundSnack);
    appState.activeSnack = foundSnack
  }

   buySnack(snackName) {
let foundSnack = appState.snacks.find(snack=>snack.name==snackName)
console.log(foundSnack);
moneyService.subtractMoney(foundSnack)
  }
}


export const snackService = new SnackService()