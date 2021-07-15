import PizzasController from "./Controllers/PizzasController.js";
class App {
  // valuesController = new ValuesController();
  pizzasController = new PizzasController()
}

window["app"] = new App();
