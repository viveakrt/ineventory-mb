/**
 * This Method Returns details of all BMW and Audi
 * 
 * @param {Object} inventory Array of Details of cars in Inventory
 */
function BMWAndAudi(inventory) {
    
    if (typeof inventory !== 'object' || inventory.length===0){
        return []
    }else{

        let bmwAndAudi = [];
        
        for (let index=0; index < inventory.length; index++) {
            let car = inventory[index];
            if(car.car_make === 'BMW' || car.car_make === 'Audi'){
                bmwAndAudi.push(car)
            }
        }
        
        return bmwAndAudi
    }
}
module.exports = BMWAndAudi