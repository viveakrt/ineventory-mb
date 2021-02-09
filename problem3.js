/**
 * This Method return array of car model in sorted order
 * 
 * @param {Object} inventory Array of Details of cars in Inventory
 */
function sortedListOfCar(inventory=[]) {
    if (inventory.length===0){
        return []
    }else{
    let carModel = []
    for (let i=0; i < inventory.length; i++) {
        carModel.push(inventory[i].car_model)
    }
    return carModel.sort()
}
}
module.exports = sortedListOfCar