export default class Topping {
  constructor({ name }) {
    this.name = name
  }


  get Template {
    return `<li>${this.name}</li>`
  }
}