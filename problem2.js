/**
 * This  Method return the last element in inventory object
 * 
 * @param {Array} inventory Array of Details of cars in Inventory
 */
function lastCar(inventory=[]) {
    if (inventory.length===0){
        return []
    }else{
    return [inventory.pop()];
    }
}

module.exports = lastCar;