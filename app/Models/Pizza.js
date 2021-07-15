export default class Pizza {
  constructor({ crust, size, name }) {
    this.crust = crust
    this.size = size
    this.name = name
  }

  get Template() {
    return `
    <div class="col-4 mt-3">
      <div class="bg-light rounded shadow-light">
        <div class=" rounded-top bg-pizza text-light text-center p-3">
            <h3>${this.name.toUpperCase()}</h3>
        </div>
        <div class="p-2">
            <p><b>Pie Style: </b></p>
            <ul class="bg-gray lighten-40 p-2 pl-4">
                <li>${this.crust}</li>
                <li>${this.size}</li>
            </ul>
        </div>
        <div class="p-2 ">
            <p><b>Toppings: </b></p>
            <ul class="bg-gray lighten-40 p-2 pl-4">
                <li>Pepperoni</li>
                <li>Olive</li>
                <li>Pineapple</li>
            </ul>
        </div>
      </div>
    </div>`
  }
}