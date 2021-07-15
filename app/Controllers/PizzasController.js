import { ProxyState } from "../AppState.js"
import { pizzasService } from "../Services/PizzasService.js"

function _draw() {
  let template = ''
  let pizzas = ProxyState.pizzas
  pizzas.forEach(pizza => template += pizza.Template)
  document.getElementById('pizzas').innerHTML = template
}


export default class PizzasController {
  constructor() {
    ProxyState.on('pizzas', _draw)

    // NOTE this is here so when the page first loads it draws the pizzas already in the proxystate
    _draw()
  }


  createPizza() {
    // NOTE PREVENTS PAGE RELOADING
    event.preventDefault()
    let form = event.target
    let rawPizza = {
      name: form.name.value,
      crust: form.crust.value,
      size: form.size.value
    }
    pizzasService.createPizza(rawPizza)
  }
}