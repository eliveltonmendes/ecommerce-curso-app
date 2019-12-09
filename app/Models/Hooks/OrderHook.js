'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async (modelInstance) => {
    model.$sideLoaded.subtotal = await modelInstance.items().getSum('subtotal')
    model.$sideLoaded.qty_items = await modelInstance.items().getSum('quantity')
    model.$sideLoaded.disctoun = await modelInstance.discounts.getSum('discount')
    model.total = await model.$sideLoaded.subtotal - model.$sideLoaded.discounts
}

OrderHook.updateCollectionValues = async (modelInstance) => {
    for (let model of models ){
        model = await OrderHook.updateValues(model)
    }
}
