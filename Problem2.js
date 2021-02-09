/**
 * This  Method return the last element in inventory object
 * 
 * @param {Object} inventory Array of Details of cars in Inventory
 */
function lastCar(inventory) {

    return inventory.pop();
}

module.exports = lastCar;