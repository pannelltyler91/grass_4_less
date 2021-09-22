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
        if(users.length == 0){
          
            const passwordHash =  bcrypt.hashSync(req.body.pw,10)
            db.admin.create({
                username: req.body.username,
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
            name:req.body.name
        }
    }).then((employees)=>{
        if(employees.length == 0){
          
            const passwordHash =  bcrypt.hashSync(req.body.pw,10)
            db.employees.create({
                name: req.body.name,
                password: passwordHash,
                address:req.body.address,
                phone:req.body.phone,
                employee_id:req.body.employee_id,
                salary:req.body.salary,
                email:req.body.email,

            }).then(()=>{
                res.json({message:'Employee Added'})
            })
        }else{
            res.status(409).json({error:'Employee with username already exists'})
        }
      
        
    })
    // res.json({})
})
app.post('/api/client/register', (req, res) => {
    console.log(req.body);
    db.clients.findAll({
        where:{
            email:req.body.email
        }
    }).then((clients)=>{
        if(clients.length == 0){
          
            const passwordHash =  bcrypt.hashSync(req.body.pw,10)
            db.clients.create({
                first_name: req.body.first_name,
                last_name:req.body.last_name,
                password: passwordHash,
                address:req.body.address,
                phone:req.body.phone,
                email:req.body.email

            }).then(()=>{
                res.json({message:'Client Added'})
            })
        }else{
            res.status(409).json({error:'Client with email already exists'})
        }
      
        
    })
    // res.json({})
})

app.get('/employees', (req,res) =>{
    // console.log('route works')
    // res.send('all employees')
    db.employees.findAll(). then((employees)=>{
        console.log(employees)
        res.render('allEmployees', {
            locals:{
                employees:employees
            }
        })
    })
})
app.get('/employee/:id', (req,res) =>{
    // console.log('route works')
    // res.send('all employees')
   db.employees.findAll({
       where:{
           employee_id:req.params.id
       }
   }).then((employee) =>{
       res.render('editEmployee', {
           locals:{
               employee:employee
           }
       })
   })
})
app.get('/clients', (req,res) =>{
    // console.log('route works')
    // res.send('all employees')
    db.clients.findAll(). then((clients)=>{
        console.log(clients)
        res.render('allClient', {
            locals:{
                clients:clients
            }
        })
    })
})
app.get('/administrators', (req,res) =>{
    // console.log('route works')
    // res.send('all employees')
    db.admin.findAll(). then((admins)=>{
        console.log(admins)
        res.render('allAdmins', {
            locals:{
                admins:admins
            }
        })
    })
})



app.delete('/api/employee/:id', (req,res) =>{
    // console.log('route is working', req.params.id)
    // res.send('employee deleted')
    db.employees.destroy(
        {
            where:{
                employee_id:req.params.id
            }
        }
    ).then((result) =>{
        res.json({message:result})
    })
})







app.listen(3000, () => {
 console.log('App is listening on localhost:3000')
})