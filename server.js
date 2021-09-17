const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const session = require('express-session');
const es6Renderer = require('express-es6-template-engine');
const db = require('./models')

let users = [{user_name:'user1', password:'password1'},{user_name:'user2', password:'password2'},{user_name:'user3', password:'password3'}]

app.use(express.json());


app.use(express.static(__dirname + '/public'));


app.engine('html', es6Renderer);
app.set('views','templates');
app.set('view engine', 'html');

app.get('/aLogin', (req,res) =>{
    res.render('/adminLogin');
})


app.post('/api/admin/login', (req,res) => {
    console.log(req.body)
    db.admin.findAll(
       { where:{username:req.body.username}}
    ).then((user) =>{
        console.log(user[0].password)
    })
    res.json({})

})

app.post('/api/admin/register', (req, res) => {
    console.log(req.body);
    db.admin.findAll({
        where:{
            username:req.body.username
        }
    }).then((user)=>{
        if(user.length == 0){
            bcrypt.hash(req.body.pw,10).then((hash) =>{
                db.admin.create({
                    username:req.body.username,
                    password:hash
                }).then(()=>{
                    res.json({})
                }) 

            })
        }else{
            res.status(400).json({error:'Admin already exists!'})
        }
    })
    // res.json({})
} )



app.post('/api/employee/login', (req,res) => {
    console.log(req.body)
    res.send('');

})







app.listen(3000, () => {
 console.log('App is listening on localhost:3000')
})