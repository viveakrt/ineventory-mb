/**
 * This Method Call value by id
 * 
 * @param {object} inventory List of details of car in inventory
 * @param {number} id Id of car we required the detail
 */
function callById(inventory, id) {
    const car_model=[]
    if(inventory.length===0 || id === undefined){
        return car_model
    }
    for (let i=0; i < inventory.length; i++) {
        cars = inventory[i];
        if (cars.id === id) {
            car_model.push(inventory[i])
            return car_model;
        }
    }
    return []
}

module.exports = callById;
