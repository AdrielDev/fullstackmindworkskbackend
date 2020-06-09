const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');
const JobsController = require('./controllers/jobsController');

//User
routes.get('/user/:id', UserController.showUserById);
routes.post('/users', UserController.persistUser);
routes.get('/users', UserController.listUsers);
routes.get('/userGit', UserController.gitUser2020);

//Login
routes.post('/login/:username', UserController.login);

//Jobs
routes.post('/jobs', JobsController.store);
routes.get('/jobs', JobsController.listJobs);

module.exports = routes;