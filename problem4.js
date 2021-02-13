/**
 * This Method returns array of years of cars in inventory
 * @param {Object} inventory Array of Details of cars in Inventory
 */
function listOfCarYears(inventory=[]) {

    if (inventory.length === 0){
        return []
    }else{
        let carYears = []

        for (let index=0; index < inventory.length; index++) {
            carYears.push( inventory[index].car_year )
        }
    
        return carYears
    }
}

module.exports = listOfCarYears
