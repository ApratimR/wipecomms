const express = require('express');
const { RESPONSE_MESSAGES } = require('../constants/messages');
const { generate_body } = require('../common/common_functions');
const person_router = express.Router();

person_router.post("/signup",async (req,res)=>{
    try {
        const result = req.body
        return generate_body(res,200,RESPONSE_MESSAGES[200],result)
    } catch (err) {
        return generate_body(res,500,RESPONSE_MESSAGES[500])
    }
})


module.exports = person_router