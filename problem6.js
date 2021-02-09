/**
 * This Method Returns details of all BMW and Audi
 * 
 * @param {Object} inventory Array of Details of cars in Inventory
 */
function BMWAndAudi(inventory=[]) {
    if (inventory.length===0){
            return []
    }else{
        let bmwAndAudi = [];
        for (let i=0; i< inventory.length; i++) {
            let car = inventory[i];
            if(car.car_make === 'BMW' || car.car_make === 'Audi')
                bmwAndAudi.push(car)
            else
                continue
        }
        return bmwAndAudi
    }
}
module.exports = BMWAndAudi