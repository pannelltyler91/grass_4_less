const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

let users = [
{}
]

app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get('api/users', (req, res)=>{

})

app.listen(3000, () => {
 console.log('App is listening on localhost:3000')
})