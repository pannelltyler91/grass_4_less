const express = require('express')
const router = express.Router()


router.get('/', (req,res) =>{
    console.log('get /admin works')
})

router.post('/login', (req,res) => {
    console.log(req.body.username)
    console.log(req.body.pw)
    res.json({message:'did it work?'})

})

module.exports = router