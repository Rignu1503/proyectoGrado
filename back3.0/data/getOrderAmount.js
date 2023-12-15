//Obtener los productos de los carritos

const getItemById = require("./getItemById");

module.exports = getOrderAmount = async (items) => {
    let amount = 0;

    // for que nos recorre los datos que estan en la base de datos
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        //Peticion base de datos y calculo del precio
        const itemDB = await getItemById(item.id)
        let operation = itemDB.price * item.qty;
        amount += operation;
    }
    const onlyTwoDecimals = amount.toFixed(2);
    const parsedAmount = parseInt(onlyTwoDecimals.replace('.', ''), 10);
    console.log(parsedAmount)
    return parsedAmount;
};
