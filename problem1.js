/**
 * This Method Call value by id
 * 
 * @param {object} inventory List of details of car in inventory
 * @param {number} id Id of car we required the detail
 */
function callById(inventory, id) {
    let car_model={}
    if(inventory.length===0 || id === undefined){
        return car_model
    }
    for (let i=0; i < inventory.length; i++) {
        car_model = inventory[i];
        if (car_model.id === id) {
            return car_model;
        }
    }
    return car_model
}

module.exports = callById;
