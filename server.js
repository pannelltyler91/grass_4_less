const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
const adminRoutes = require('./controllers/administrators');
const empRoutes = require('./controllers/employees');
const clientRoutes = require('./controllers/clients');

let users = [{user_name:'user1', password:'password1'},{user_name:'user2', password:'password2'},{user_name:'user3', password:'password3'}]

app.use(express.json());

app.use('/admin',adminRoutes)
app.use('/employee',empRoutes)
app.use('/client',clientRoutes)

app.use(express.static(__dirname + '/public'));

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');



app.post('/api/employee/login', (req,res) => {
    console.log(req.body)
    res.send('');

})







app.listen(3000, () => {
 console.log('App is listening on localhost:3000')
})