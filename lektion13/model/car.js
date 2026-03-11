class Car {
    constructor(brand, model){
        this.brand = brand
        this.model = model
        this.id = Car.id++
    }
    static id = 1
}

export {Car}