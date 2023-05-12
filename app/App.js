import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnackController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  moneyController = new MoneyController()

  snacksController = new SnacksController()

}

window["app"] = new App();
