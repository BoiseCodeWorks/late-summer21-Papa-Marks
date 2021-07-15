import { ProxyState } from "../AppState.js"
import Pizza from "../Models/Pizza.js"
import Topping from "../Models/Topping.js"

class PizzasService {

  createPizza(rawPizza) {
    ProxyState.pizzas = [...ProxyState.pizzas, new Pizza(rawPizza)]
  }

  addTopping(rawTopping) {
    ProxyState.toppings = [...ProxyState.toppings, new Topping(rawTopping)]
  }

  destroy(id) {
    ProxyState.pizzas = ProxyState.pizzas.filter(pizza => pizza.id != id)
    ProxyState.toppings = ProxyState.toppings.filter(topping => topping.pizzaId != id)
  }
  removeTopping(id) {
    ProxyState.toppings = ProxyState.toppings.filter(topping => topping.id != id)
  }
}

export const pizzasService = new PizzasService()