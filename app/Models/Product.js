'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    image(){
        return this.belongsTo('App/Models/Image')
    }

    /**
     * Relacionamento entre produto e a imagem
     * Galeria de imagens
     */
    images(){
        return this.belongsToMany('App/Models/Image')
    }

    /**
     * Relacionamento entre produto e categorias
     */
    categories(){
        return this.belongsToMany('App/Models/Category')
    }

    /**
     * Relacionamento entre produtos e cupons de desconto
     */
    coupons(){
        return this.belongsToMany('App/Models/Coupon')
    }
}

module.exports = Product
