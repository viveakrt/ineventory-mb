function sortedListOfCar(inventory) {
    let carModel = []
    for (let i=0; i < inventory.length; i++) {
        carModel.push(inventory[i].car_model)
    }
    return carModel.sort()
}
module.exports = sortedListOfCar