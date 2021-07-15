export default class Value {
    constructor({ title, price, cost, imgUrl }) {
        this.title = title
        this.price = price || cost
        this.imgUrl = imgUrl
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            <img src="${this.imgUrl}" class="img-fluid" alt="">
            ${this.title}
        </div>
        `
    }
}


let rawValue = { title: 'abc', price: 123 }

new Value(rawValue)
