const { Student } = require('../models/student');

let messageIdNotFound = 'Student ID not found!';

module.exports = {
  fetchStudents: (req, res) => {
    Student.all().then(students => {
      res.json({
        status: 'success',
        data: students,
        error: null,
      });
    }).catch(err => {
      res.status(400).json({
        status: 'error',
        data: null,
        error: {
          message: 'Unable to fetch students.',
        }
      });
    });
  },
  createStudent: (req, res) => {
    let body = req.body;

    Student.create(body).then(item => {
      res.status(200).json({
        status: 'success',
        data: item,
        error: null
      });
    }).catch(err => {
      res.status(400).json({
        status: 'error',
        data: null,
        error: {
          message: 'Unable to create student.'
        }
      });
    });
  },
  fetchStudentById: (req, res) => {
    let studentId = req.params.id;

    Student.findById(studentId).then(student => {
      if (!student) {
        return res.status(404).json({
          status: 'error',
          data: null,
          error: {
            message: messageIdNotFound
          }
        });
      }

      res.json({
        status: 'success',
        data: student,
        error: null,
      });
    }).catch(err => {
      res.status(400).json({
        status: 'error',
        data: null,
        error: {
          message: 'Unable to fetch student by id.'
        }
      });
    });
  },
  updateStudentById: (req, res) => {
    let studentId = req.params.id;
    let body = req.body;

    Student.update(body, {
      where: {
        id: studentId
      }
    }).then(student => {
      // console.log(student);

      if(student[0] === 0) {
        return res.status(404).json({
          status: 'error',
          data: null,
          error: {
            message: messageIdNotFound
          }
        });
      }

      res.json({
        status: 'success',
        data: {
          message: 'Successfully updated'
        },
        error: null
      });
    }).catch(err => {
      res.status(400).json({
        status: 'error',
        data: null,
        errro: {
          message: 'Unable to update student by id.'
        }
      });
    });
  },
  deleteStudentById: (req, res) => {
    let studentId = req.params.id;

    Student.destroy({
      where: {
        id: studentId
      }
    }).then(result => {
      // console.log(result);
      if(result === 0) {
        return res.status(404).json({
          status: 'error',
          data: null,
          error: {
             message: messageIdNotFound
          }
        });
      }

      res.status(200).json({
        status: 'success',
        data: {
          message: 'Sucessfully deleted!'
        },
        error: null
      });
    }).catch(err => {
      // console.error(err);
      res.status(400).json({
        status: 'error',
        data: null,
        error: {
          message: 'Unable to delete student by id.'
        }
      });
    });
  }
};
