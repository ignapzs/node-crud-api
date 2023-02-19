const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// initial route (for testing purposes only)
app.get('/', (req, res) => {
  res.send('Hello World');
});

//CRUD routes
app.use('/users', require('./routes/users'));

//error handling
app.use((error, req, res) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync with database
sequelize
.sync()
.then(() => {
  console.log("Database connected");
  app.listen(3000);
})
.catch(err => console.log(err));
