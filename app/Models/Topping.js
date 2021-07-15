import { generateId } from "../Utils/GenerateId.js"

export default class Topping {
  constructor({ name, pizzaId, id = generateId() }) {
    this.id = id
    this.pizzaId = pizzaId
    this.name = name
    this.price = .5
  }


  get Template() {
    return `<li>${this.name} 
    <span class="action" onclick="app.pizzasController.removeTopping('${this.id}')">x</span></li>`
  }
}