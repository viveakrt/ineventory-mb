function BMWAndAudi(inventory) {
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
module.exports = BMWAndAudi