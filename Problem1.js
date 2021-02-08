function callById(inventory, id) {
    for (let i=0; i < inventory.length; i++) {
        let car_model = inventory[i];
        if (car_model.id === id) {
            return car_model;
        }
    }
}

module.exports = callById;
