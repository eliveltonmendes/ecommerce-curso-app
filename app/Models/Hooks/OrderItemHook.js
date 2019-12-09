'use strict'

const OrderItemHook = exports = module.exports = {}
const Product = use('App/Model/Product')

OrderItemHook.method = async (modelInstance) => {
    let product = await Product.find(model.product_id) //Busca pelo id do produto
    model.subtotal = model.quantity * model.price
}
