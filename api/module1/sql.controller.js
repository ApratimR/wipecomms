const express = require('express');
const person_router = express.Router();


person_router.post("/get-name",async (req,res,next)=>{
    try {
        console.log(req.body)
        return res.send(req.body);
    } catch (err) {
        next(err);
    }
})


module.exports = person_router