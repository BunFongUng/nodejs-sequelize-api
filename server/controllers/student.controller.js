const { Student } = require('../models/student');

module.exports = {
    fetchStudents: (req, res) => {
        Student.all().then(students => {
            res.json({
                status: 'success',
                data: students
            });
        }).catch(err => {
            res.status(400).json({
                status: 'error',
                message: 'Unable to fetch students.'
            });
        });
    },
    createStudent: (req, res) => {
        let body = req.body;

        Student.create(body).then(item => {
            res.status(200).json({
                status: 'success',
                data: item
            });
        }).catch(err => {
            res.status(400).json({
                status: 'error',
                message: err
            });
        });
    },
    fetchStudentById: (req, res) => {
        let studenId = req.params.id;
        
        Student.findById(studenId).then(student => {
            res.json({
                status: 'success',
                data: student
            });
        }).catch(err => {
            res.status(400).json({
                status: 'error',
                message: 'Unable to fetch student by id.'
            });
        });
    }
};