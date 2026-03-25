class Car {
    constructor(brand, model, id = Car.id){
        this.brand = brand
        this.model = model
        this.id = id

        // Move the static counter forward when an existing car is restored from file.
        if (id >= Car.id) {
            Car.id = id + 1
        }
    }
    static id = 1
}

export {Car}