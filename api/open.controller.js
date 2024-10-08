const express = require('express');
const { RESPONSE_MESSAGES } = require('../constants/messages');
const { generate_body } = require('../common/common_functions');
const { db } = require('../db')
const person_router = express.Router();

person_router.post("/signup",async (req,res)=>{
    try {
        const result = req.body
        //     let some_db_val = await db('users')
        //   .select('name')
        //   .orderByRaw('LENGTH(name) ASC')
        //   .first()
        console.log(some_db_val)
        return generate_body(res,200,RESPONSE_MESSAGES[200],result)
    } catch (err) {
        return generate_body(res,500,RESPONSE_MESSAGES[500])
    }
})


module.exports = person_router