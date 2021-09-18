const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const session = require('express-session');
const es6Renderer = require('express-es6-template-engine');
const db = require('./models');
const { restart } = require('nodemon');

let users = [{user_name:'user1', password:'password1'},{user_name:'user2', password:'password2'},{user_name:'user3', password:'password3'}]

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.use(express.static(__dirname + '/public'));


app.engine('html', es6Renderer);
app.set('views','templates');
app.set('view engine', 'html');




app.post('/api/admin/login', (req,res) => {
    console.log(req.body)
    db.admin.findAll(
       { where:{username:req.body.admin_username}}
    ).then((users) =>{
        if(users.length > 0 ){
            let user = users[0];
            let passwordHash = users[0].password;

            if(bcrypt.compareSync(req.body.admin_password,passwordHash)){
                res.render('adminProfile',{
                    locals:{
                        adminName:user.username
                    }
                })
            }else{
                res.status(403).json({error:'Password is incorrect'})
            }

        }else{
            res.status(404).json({error:'User does not exist'})
        }

    })
})

app.post('/api/admin/register', (req, res) => {
    console.log(req.body);
    db.admin.findAll({
        where:{
            username:req.body.username
        }
    }).then((users)=>{
        if(users == {}){
          
            const passwordHash =  bcrypt.hashSync(req.body.pw,10)
            db.admin.create({
                username: req.body.admin_username,
                password: passwordHash
            }).then(()=>{
                res.json({})
            })
        }else{
            res.status(409).json({error:'Admin with username already exists'})
        }
      
        
    })
    // res.json({})
})
app.post('/api/employee/register', (req, res) => {
    console.log(req.body);
    db.employees.findAll({
        where:{
            username:req.body.username
        }
    }).then((users)=>{
        if(users == {}){
          
            const passwordHash =  bcrypt.hashSync(req.body.pw,10)
            db.admin.create({
                name: req.body.admin_username,
                password: passwordHash,
                address:'',
                phone:'',
                employee_id:'',
                salary:'',
                email:'',
                
            }).then(()=>{
                res.json({})
            })
        }else{
            res.status(409).json({error:'Admin with username already exists'})
        }
      
        
    })
    // res.json({})
})











app.listen(3000, () => {
 console.log('App is listening on localhost:3000')
})