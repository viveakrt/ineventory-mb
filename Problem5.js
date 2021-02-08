function olderThan2000(inventory, carYears) {
    let oldCars = []
    let listOfCars = []
    for (let i=0; i< carYears.length; i++) {
        if (carYears[i] < 2000) {
            oldCars.push(carYears[i])
        }
    }
    for (let i=0; i < inventory.length; i++) {
        let car = inventory[i]
        if (oldCars.includes(car.car_year)) {
            listOfCars.push(car)
        }
    }
    return listOfCars
}
module.exports = olderThan2000