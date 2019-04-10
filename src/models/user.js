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
        this.created = new Date()
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
    
    toJson() {
        let pretty = {
            id: this.id,
            firstName: this.firstName,
            foreName: this.foreName,
            email: this.email,
            created: utils.formatDate( this.created ),
        }
        return JSON.stringify( pretty )

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

