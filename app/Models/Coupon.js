'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {
    static get dates(){
        return ['created_at', 'updated_at', 'expires_at']
    }

    users(){
        return this.belongsToMany('App/Models/User')
    }

    products(){
        return this.belongsToMany('App/Models/Products')
    }

    orders(){
        return this.belongsToMany('App/Models/Orders')
    }
}

module.exports = Coupon
