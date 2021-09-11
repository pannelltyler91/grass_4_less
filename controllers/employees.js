var express = require('express')
var router = express.Router()


router.get('/', (req,res) =>{
    console.log('get /admin works')
})

router.post('/login', (req,res) => {
    console.log(req.body)
    res.send('');

})

module.exports = router