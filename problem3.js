/**
 * This Method return array of car model in sorted order
 * 
 * @param {Object} inventory Array of Details of cars in Inventory
 */
function sortedListOfCar(inventory) {

    if (typeof inventory !== 'object' || inventory.length === 0){
        return []
    }else{
        
        let carModel = []
        
        for (let index=0; index < inventory.length; index++) {
            carModel.push(inventory[index].car_model)
        }
        return carModel.sort()
    }
}

module.exports = sortedListOfCar
