/**
 * This Method Call value by id
 * 
 * @param {object} inventory List of details of car in inventory
 * @param {number} id Id of car we required the detail
 */
function callById(inventory, id) {
    for (let i=0; i < inventory.length; i++) {
        let car_model = inventory[i];
        if (car_model.id === id) {
            return car_model;
        }
    }
}

module.exports = callById;
