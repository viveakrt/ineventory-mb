/**
 * This Method Call value by id
 * 
 * @param {object} inventory List of details of car in inventory
 * @param {number} id Id of car we required the detail
 */
function callById(inventory, id) {
    const carModel=[]

    if( typeof inventory !== 'object' || inventory.length===0 || id === undefined){
        return carModel
    }

    for (let index=0; index < inventory.length; index++) {
        let cars = inventory[index]
        if (cars.id === id) {
            carModel.push(inventory[index])
            return carModel
        }
    }

    return []
}

module.exports = callById;
