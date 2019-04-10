const _ = require('lodash')
const utils = require('../utils/utils')

const idGen = utils.generator()
const userMap = new Map()

class User {
    constructor( firstName, foreName, email ) {
        this.id = idGen.next().value
        this.firstName = firstName
        this.foreName = foreName
        this.email = email
        this.created = utils.formatDate( new Date() )
        userMap.set( this.id, this )
    }

    setFirstName( name ) {
        this.firstName = name
    }
    
    setForeName( name ) {
        this.foreName = name
    }

    setEmail( email ) {
        this.email = email
    }

    static getAll() {
        return _.map( [ ...userMap.keys() ], (key) => userMap.get(key) )
    }

    static getById(id) {
        return userMap.get(id)
    }

    static delete( id ) {
        return userMap.delete( id )
    }
}

module.exports = User;

