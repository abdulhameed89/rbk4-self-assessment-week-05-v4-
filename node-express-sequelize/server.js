var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});
//creating users route to get all users and send it to the '/users' route 
app.get('/users',function (req,res) {
	res.send(Model.findAll({attributes:['username']}))
})

 var port=3000;
//set the enviroment port if it is not exist it will take the local port 3000
app.set('port', process.env.PORT || 3000);
// listening to any change on this server 
app.listen(port)
// exports the methods that we could use it somewhare else
module.exports = { 
  app: app,
  User: User
};
