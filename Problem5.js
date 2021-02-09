/**
 * This Method returns array of list of cars before 2000 in inventory
 * 
 * @param {Object} inventory Array of Details of cars in Inventory
 * @param {Array} carYears list of years of car in inventory
 */
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