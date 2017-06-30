// IMPORTS
const express = require("express");
const models = require("./models")
const bodyParser = require("body-parser");
const morgan = require("morgan")
const app = express();
const port = process.env.PORT || 8000;
const mustacheExpress = require('mustache-express');

// MIDDLEWARE
app.engine('mustache', mustacheExpress());
app.set('views', './public')
app.use("/", express.static("./public"));
app.set('view engine', 'mustache')
app.use(bodyParser.json());
app.use(morgan("dev"));

// ROUTES
app.get("/", function(req, res){
  res.render('index');
});

// app.post("/", )

// app.get("/users", function(req, res){
//   models.users.findAll().then(function(foundUsers){
//     res.send(foundUsers);
//   }).catch(function(err){
//     res.status(500).send(err);
//   })
// })

// app.get("/users/:id", function(req, res){
//   models.users.findById(req.params.id).then(function(foundUser){
//     res.send(foundUser);
//   }).catch(function(err){
//     res.status(500).send(err);
//   })
// })

// app.post("/users", function(req, res){
// var userData = req.body;
// var newUser = models.users.build(userData);

// newUser.save().then(function(savedUser){
//   res.send(savedUser);
// }).catch(function(err){
//   res.status(500).send(err);
// });
// });

// app.delete("/users/:id", function(req, res){
//   models.users.destroy({ where: {id: req.params.id } }).then(
//     function(){
//       res.send("Deleted user");
//     }
//   ).catch(function(err){
//   res.status(500).send(err);
// });
// })

app.listen(8000, () => {
  console.log(`Server listening on port ${port}.`);
});