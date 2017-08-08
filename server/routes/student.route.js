const { Router } = require('express');

const studentsController = require('../controllers/student.controller');

const route = Router();

route.get('/students', studentsController.fetchStudents);

route.post('/students', studentsController.createStudent);

route.get('/students/:id', studentsController.fetchStudentById);

module.exports = {
    studentRoutes: route
};