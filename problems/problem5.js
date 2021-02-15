/**
 * This Method returns array of list of cars before 2000 in inventory
 * 
 * @param {Object} inventory Array of Details of cars in Inventory
 * @param {Array} carYears list of years of car in inventory
 * @param {number} searchYear year older than
 */
function olderThan2000(inventory, searchYear = 2000 ) {

    let carYears = []

    if (typeof inventory !== 'object' || inventory.length===0){
        return []
    }else{
        for (let index=0; index < inventory.length; index++) {
            carYears.push(inventory[index].car_year)
        }
    }

    let oldCars = []
    
    let listOfCars = []
    
    for (let index=0; index< carYears.length; index++) {
        if (carYears[index] < searchYear) {
            oldCars.push(carYears[index])
        }
    }
    
    for (let index=0; index < inventory.length; index++) {
        let car = inventory[index]
        if (oldCars.includes(car.car_year)) {
            listOfCars.push(car)
        }
    }
    
    return listOfCars
}

module.exports = olderThan2000
