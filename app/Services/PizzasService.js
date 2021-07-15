import { ProxyState } from "../AppState.js"
import Pizza from "../Models/Pizza.js"

class PizzasService {
  createPizza(rawPizza) {
    ProxyState.pizzas = [...ProxyState.pizzas, new Pizza(rawPizza)]
  }
}

export const pizzasService = new PizzasService()