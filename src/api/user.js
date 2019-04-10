const express = require('express')
const _ = require('lodash')
const User = require('../models/user')
const utils = require('../utils/utils')

const userApi = express();

// add user
userApi.post('/add', (req, res) => {
    if ( utils.checkEmail(req.body.email) ) {
        res.send( new User(req.body.firstName, req.body.foreName, req.body.email) )
    } else {
        res.send( false )
    }
    
} )

// get user
userApi.get( /([0-9]{1,7})/, (req, res) => {
    res.send( User.getById( parseInt( req.params[0] ) ).toJson() )
} )

// get all
userApi.get('/all', (req, res) => {
    res.send( _.map( User.getAll(), user => user.toJson() ) )
} )

// update user
userApi.post( /\/update\/([0-9]{1,7})/, (req, res) => {
    let user = User.getById( parseInt( req.params[0] ) )
    if ( user && utils.checkEmail(req.body.email) ) {
        user.setFirstName(req.body.firstName)
        user.setForeName(req.body.foreName)
        user.setEmail(req.body.email)
        res.send( user )
    } else {
        res.send( false )
    }
} )

// delete user
userApi.delete(/([0-9]{1,7})/, (req, res) => {
    res.send( User.delete( parseInt( req.params[0] ) ) )
} )

module.exports = userApi