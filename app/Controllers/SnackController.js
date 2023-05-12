import { appState } from "../AppState.js"
import { snackService } from "../Services/SnackService.js";
import { setHTML } from "../Utils/Writer.js"


function _drawSnacks() {
  console.log("drawing snacks");
  let snacks = appState.snacks
  let template = '' 
  snacks.forEach(snacks => template += snacks.SnacksTemplate)
  setHTML('snacks', template)
}

export class SnacksController {
  constructor(){
    console.log('hello from the snacks controller');

  }

buySnack(snackName){
  console.log('buy this snack!', snackName);
  snackService.buySnack(snackName)
}


}