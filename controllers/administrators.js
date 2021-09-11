const express = require('express')
const router = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')



router.post('/register', (req,res) =>{
    console.log('get /admin works')
})

router.post('/login', (req,res) => {
    // console.log(req.body.username)
    // console.log(req.body.pw)
    db.admin.findAll({
        where:{
            username:req.body.username
        }
    }). then((result) =>{
        console.log(result[0].password)
        res.render('admin',{
            locals:{
                adminName:result[0].username
            }
        })
    })
    

})

module.exports = router