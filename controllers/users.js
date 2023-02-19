const User = require('../models/user');

// CRUD Controllers

//GET all users
exports.getUsers = (req, res) => {
  User.findAll()
  .then(users => {
    res.status(200).json({ users: users });
  })
  .catch(err => console.log(err));
}

//GET user by id
exports.getUser = (req, res) => {
  const userId = req.params.userId;
  User.findByPk(userId)
  .then(user => {
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    res.status(200).json({ user: user });
  })
  .catch(err => console.log(err));
}

//CREATE (POST) user
exports.createUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  User.create({
    name: name,
    email: email
  })
  .then(result => {
    console.log('Created User');
    res.status(201).json({
      message: 'User created successfully!',
      user: result
    });
  })
  .catch(err => {
    console.log(err);
  });
}

//UPDATE (PUT) user
exports.updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  User.findByPk(userId)
  .then(user => {
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    user.name = updatedName;
    user.email = updatedEmail;
    return user.save();
  })
  .then(result => {
    res.status(200).json({message: 'User updated!', user: result});
  })
  .catch(err => console.log(err));
}

//DELETE user
exports.deleteUser = (req, res) => {
  const userId = req.params.userId;
  User.findByPk(userId)
  .then(user => {
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    return User.destroy({
      where: {
        id: userId
      }
    });
  })
  .then(result => {
    res.status(200).json({ message: 'User deleted!' });
  })
  .catch(err => console.log(err));
}
