const expect = require('expect');

const request = require('supertest');

const { app } = require('../../server');

const { Student } = require('../../models/student');

describe('Student CRUD', () => {
    it('should create a new student', (done) => {
        let student = {
            first_name: 'hacker',
            last_name: 'lover',
            age: 31,
            gender: 'male',
            address: 'USA'
        };

        request(app)
            .post('/api/students')
            .send(student)
            .expect(200)
            .expect((res) => {
                expect(res.body.data.first_name).toBe(student.first_name);
            })
            .end((err, res) => {
                if(err) {
                    return done(err);
                }

                Student.findById(res.body.data.id).then(student => {
                    expect(student.first_name).toBe(student.first_name);
                    done();
                }).catch(err => done(err));
            });
    });
});